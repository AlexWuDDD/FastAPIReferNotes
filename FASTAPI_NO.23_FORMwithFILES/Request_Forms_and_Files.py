# -*- coding: utf-8 -*-
from typing import List
from starlette.requests import Request
from fastapi import FastAPI, Form, File, UploadFile
from starlette.templating import Jinja2Templates

app = FastAPI()
templates  = Jinja2Templates(directory="templates")

@app.post("/create_file/")
async def create_file(file: bytes       = File(...),
                      fileb: UploadFile = File(...),
                      notes: str        = Form(...)):
    return {"file_size"           :len(file),
            "notes"               :notes,
            "fileb_content_type"  :fileb.content_type}

@app.get("/")
async def root(request: Request):
    return templates.TemplateResponse("post.html", {"request": request})
  

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app="Request_Forms_and_Files:app", host="127.0.0.1", port=8000, reload = True)