#!/bin/bash
cd /home/ec2-user
echo 'Parando container'
sudo docker stop web_app
echo 'Removendo container'
sudo docker rm -f web_app 
echo 'Aplicação parada'
