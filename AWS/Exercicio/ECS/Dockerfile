FROM python:3.9-slim-buster

COPY src/requirements.txt ./

RUN pip install -r requirements.txt

COPY src/* ./

CMD ["python", "./app.py"]

