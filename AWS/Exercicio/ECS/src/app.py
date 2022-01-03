from flask import Flask, request
import pymysql.cursors

application = Flask(__name__)

@application.route('/', methods=['get'])
def healty_check():
    return 'Application is run'

@application.route('/pedido', methods=['post'])
def save_pedido():
    message = request.get_json()
    
    connection = pymysql.connect(host='ecs.crmzhs3cy90s.us-east-1.rds.amazonaws.com',
                                 user='admin',
                                 password='admin123',
                                 database='Eldorado',
                                 charset='utf8mb4',
                                 cursorclass=pymysql.cursors.DictCursor)
    
    with connection:
        with connection.cursor() as cursor:
            sql = "INSERT INTO `Pedidos` (`DOCUMENTO`) VALUES (%s)"
            cursor.execute(sql, (message['Documento']))
            
        connection.commit()
        
        with connection.cursor() as cursor:
            sql = "SELECT * FROM  `Pedidos` WHERE `DOCUMENTO` =  %s"
            cursor.execute(sql, (message['Documento']))
            result = cursor.fetchone()
            
    return f'{result} - Teste new tag'

if __name__ == '__main__':
    application.run(debug=True, host='0.0.0.0')