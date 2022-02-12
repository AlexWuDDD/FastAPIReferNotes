# -*- coding: utf-8 -*-
from fastapi import FastAPI
from starlette.requests import Request

from starlette.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory="templates")
app.mount('/static', StaticFiles(directory='static'), name='static')


@app.get("/")
async def main(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app="cross_origin_resource:app", host="127.0.0.1", port=8000, reload=True)