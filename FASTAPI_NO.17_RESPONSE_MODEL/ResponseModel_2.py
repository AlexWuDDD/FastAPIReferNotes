# -*- coding: utf-8 -*-
import email
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from typing import List

app = FastAPI()

class UserIn(BaseModel):
    username: str
    password: str
    email: EmailStr
    full_name: str = None

class UserOut(BaseModel):
    username: str
    email: EmailStr
    full_name: str = None
    
@app.post("/items/", response_model=UserOut)
async def create_item(*, user: UserIn):
    return user
  
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app="ResponseModel_2:app", host="127.0.0.1", port=8000, reload=True, debug=True)