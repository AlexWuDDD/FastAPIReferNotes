# -*- coding: utf-8 -*-
from concurrent.futures import process
from json.tool import main
import time
from urllib import response

from fastapi import FastAPI
from starlette.requests import Request

app = FastAPI()

@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    print(response.headers)
    return response
  
@app.get("/")
async def root():
    return {"message": "Hello World"}
  

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)