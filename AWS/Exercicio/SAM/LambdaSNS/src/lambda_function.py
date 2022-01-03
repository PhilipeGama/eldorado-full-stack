import json
import logging
import os
import boto3

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    try:
        body = json.loads(event['body'])
        method = event['httpMethod']

        dynamoDb = boto3.resource('dynamodb', region_name=os.environ['Region'])
        dynamoTable = dynamoDb.Table(os.environ['PedidoTable'])
        
        if validate_request(body):
            if method == 'GET':
                pass
            elif method == 'POST':
                response = dynamoTable.put_item(Item = {'IdPedido': body['IdPedido']})
                return {'statusCode': 200, 'body': json.dumps(response)}
            elif method == 'PATCH':
                pass 
            else:
                logger.error('Metodo HTTP INVALIDO')
                return {'statusCode': 500, 'body': '{''message'':''Metodo HTTP invalido''}'}
        else:
                logger.error('Request inválido')
                return {'statusCode': 400, 'body': '{''message'':''Request inválido''}'}
        
    except Exception as ex:
        logger.error(ex)
        return {'statusCode': 500, 'body':'{''message'':{ex}}'}
    
    
    return {'statusCode': 204}

def validate_request(body):    
    if not 'IdPedido' in body.keys():
        return False
    
    return True;