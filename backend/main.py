from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from starlette.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
import os

conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_USERNAME"),
    MAIL_PORT=587,
    MAIL_SERVER="smtp.yandex.ru",
    MAIL_TLS=True,
    MAIL_SSL=False,
    TEMPLATE_FOLDER='./email'
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class RequestUser(BaseModel):
    name: str
    email: str


class QuestionUser(BaseModel):
    name: str
    email: str
    text: str


@app.post("/api/request")
async def update_item(background_tasks: BackgroundTasks, request: RequestUser) -> JSONResponse:
    message1 = MessageSchema(
        subject="Eliza: Спасибо вам!",
        recipients=[request.dict().get("email")],
        body={
            'email': request.dict().get("email"),
            'name': request.dict().get("name"),
            'support_email': 'support@eliza.care'
        },
        subtype="html"
    )
    message2 = MessageSchema(
        subject="Eliza: Новый пользователь!",
        recipients=["mr8bit@yandex.ru", "leonidts99@yandex.ru"],
        body={
            'email': request.dict().get("email"),
            'name': request.dict().get("name"),
        },
        subtype="html"
    )
    fm = FastMail(conf)
    background_tasks.add_task(fm.send_message, message1, template_name="new_request.html")
    background_tasks.add_task(fm.send_message, message2, template_name="our_email.html")
    return JSONResponse(status_code=200, content={"complete": True})


@app.post("/api/question")
async def update_item(background_tasks: BackgroundTasks, request: QuestionUser) -> JSONResponse:
    message1 = MessageSchema(
        subject="Eliza: Спасибо вам!",
        recipients=[request.dict().get("email")],
        body={
            'email': request.dict().get("email"),
            'name': request.dict().get("name"),
            'support_email': 'support@eliza.сare'
        },
        subtype="html"
    )
    message2 = MessageSchema(
        subject="Eliza: Новый пользователь!",
        recipients=["mr8bit@yandex.ru", "leonidts99@yandex.ru"],
        body={
            'email': request.dict().get("email"),
            'name': request.dict().get("name"),
            'text': request.dict().get("text"),
        },
        subtype="html"
    )
    fm = FastMail(conf)
    background_tasks.add_task(fm.send_message, message1, template_name="new_request.html")
    background_tasks.add_task(fm.send_message, message2, template_name="our_email.html")
    return JSONResponse(status_code=200, content={"complete": True})
