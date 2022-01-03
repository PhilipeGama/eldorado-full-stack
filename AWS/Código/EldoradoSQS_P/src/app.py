from flask import Flask, request, jsonify
import boto3
import json

application = Flask(__name__)

sqs = boto3.client('sqs', region_name='us-east-1')

@application.route('/send_message', methods=['post'])
def send_sqs():
    message = request.get_json()
    
    queue_url = "https://sqs.us-east-1.amazonaws.com/912936293159/EldoradoStandard"
    
    response = sqs.send_message(
        QueueUrl = queue_url,
        MessageBody = json.dumps(message)
    )
    
    return response 

@application.route('/get_message', methods=['get'])
def get_sqs():
    queue_url = "https://sqs.us-east-1.amazonaws.com/912936293159/EldoradoStandard"
    
    response = sqs.receive_message(
        QueueUrl = queue_url,
        MaxNumberOfMessages = 1,
        WaitTimeSeconds = 10
    )
    
    # TODO: SALVAR NO BANCO A MENSAGEM
    
    message = response['Messages'][0]
    receipt_handle = message['ReceiptHandle']
    
    sqs.delete_message(
        QueueUrl = queue_url,
        ReceiptHandle = receipt_handle
    )
    
    return message

@application.route('/send_message_fifo', methods=['post'])
def send_sqs_fifo():
    message = request.get_json()
    
    queue_url = "https://sqs.us-east-1.amazonaws.com/912936293159/Eldorado.fifo"
    
    response = sqs.send_message(
        QueueUrl = queue_url,
        MessageBody = json.dumps(message),
        MessageGroupId = message['MessageGroupId']
    )
    
    return response 

@application.route('/get_message_fifo', methods=['get'])
def get_sqs_fifo():
    queue_url = "https://sqs.us-east-1.amazonaws.com/912936293159/Eldorado.fifo"
    queue_dlq = "https://sqs.us-east-1.amazonaws.com/912936293159/EldoradoDLQ.fifo"
    
    response = sqs.receive_message(
        QueueUrl = queue_url,
        MaxNumberOfMessages = 1,
        WaitTimeSeconds = 10
    )
    
    message = response['Messages'][0]
    receipt_handle = message['ReceiptHandle']
    body = json.loads(message['Body'])
    
    try:
       1 / 0 
    except:
        response = sqs.send_message(
            QueueUrl = queue_dlq,
            MessageBody = json.dumps(body),
            MessageGroupId = body['MessageGroupId']
        )
    
    sqs.delete_message(
        QueueUrl = queue_url,
        ReceiptHandle = receipt_handle
    )
    
    return message

@application.route('/get_message_dlq', methods=['get'])
def get_sqs_fifo_dlq():
    queue_url = "https://sqs.us-east-1.amazonaws.com/912936293159/EldoradoDLQ.fifo"
    
    response = sqs.receive_message(
        QueueUrl = queue_url,
        MaxNumberOfMessages = 1,
        WaitTimeSeconds = 10
    )
    
    # TODO: SALVAR NO BANCO A MENSAGEM GERAR LOG CUSTOM
    
    message = response['Messages'][0]
    receipt_handle = message['ReceiptHandle']
    
    sqs.delete_message(
        QueueUrl = queue_url,
        ReceiptHandle = receipt_handle
    )
    
    return message

if __name__ == '__main__':
    application.run(debug=True, host='0.0.0.0')