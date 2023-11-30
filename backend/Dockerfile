FROM python:3.8.12-slim

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . /app
WORKDIR /app

COPY ./entrypoint.sh .
RUN chmod +x entrypoint.sh 

ENTRYPOINT [ "sh", "/app/entrypoint.sh" ]