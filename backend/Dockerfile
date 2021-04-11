FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

COPY ./requirements.txt requirements.txt

RUN pip install -r requirements.txt

WORKDIR  /usr/src/app
COPY .  .

EXPOSE 8000
