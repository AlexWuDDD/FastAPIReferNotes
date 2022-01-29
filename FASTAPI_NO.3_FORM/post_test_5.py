# -*- coding: utf-8 -*-
from starlette.requests import Request
from fastapi import FastAPI, Form
from starlette.templating import Jinja2Templates


app = FastAPI()
templates = Jinja2Templates(directory="templates")

@app.post("/users/")
async def create_upload_files(request: Request, username: str = Form(...),password: str = Form(...)):
    print('username:', username)
    print('password:', password)

    return templates.TemplateResponse("index.html", {"request": request, 'username': username})


@app.get("/")
async def main(request: Request):
    return templates.TemplateResponse("post.html", {"request": request})


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app='post_test_5:app', host="127.0.0.1", port=8000, reload=True, debug=True)
