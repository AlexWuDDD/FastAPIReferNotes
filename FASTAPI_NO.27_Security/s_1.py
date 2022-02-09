# -*- coding: utf-8 -*-
from typing import Optional

from fastapi import Depends, FastAPI
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

@app.get("/items/")
async def read_items(token: str = Depends(oauth2_scheme)):
    return {"token": token}
  
  
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app="s_1:app", host="127.0.0.1", port=8000, reload=True)