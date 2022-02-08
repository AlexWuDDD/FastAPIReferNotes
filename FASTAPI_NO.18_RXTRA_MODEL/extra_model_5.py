# -*- coding: UTF-8 -*-
from typing import Dict
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()


@app.get("/keyword-weights/", response_model=Dict[str, float])
async def read_keyword_weights():
    return {"foo": 2.3, "bar": 3.4}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app='extra_model_5:app', host='127.0.0.1', port=8000, reload=True)
