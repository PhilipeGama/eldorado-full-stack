#!/bin/bash
cd /home/ec2-user
echo 'Build image'
sudo docker build -t app .
echo 'Inicializando container'
sudo docker run -d --name web_app -p 8080:5000 app