# -*- coding: UTF-8 -*-
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def main():
    return {"message": "Hello World, FastAPI"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)


# uvicorn FastAPI_NO.1_helloworld.py:app --reload