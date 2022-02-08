# -*- coding: utf-8 -*-
from fastapi import FastAPI, HTTPException

from starlette.requests import Request
from starlette.responses import JSONResponse

# 安装自定义异常处理程序
# 自定义异常UnicornException
class UnicornException(Exception):
    def __init__(self, name: str):
        self.name = name

app = FastAPI()

@app.exception_handler(UnicornException)
async def unicorn_exception_handler(request: Request, exc: UnicornException):
    return JSONResponse(
        status_code=418, #418 I'm a teapot
        content= {
            "message": f"Oops! {exc.name} did somthing. There goes a rainbow...",
        }
        
    )

@app.get("/unicorns/{name}")
async def read_unicorn(name: str):
    if name == "yolo":
        raise UnicornException(name=name)
    return {"unicorn": name} 
  
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app="handling_error_2:app", host="127.0.0.1", port=8000, reload=True)