from fastapi import Depends, FastAPI, HTTPException, Header

from routers import users, items

app = FastAPI()

async def get_token_header(x_token: str = Header(...)):
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")

app.include_router(users.router)
app.include_router(items.router,
    #前缀
    prefix="/items",
    tags=["items"],
    #依赖关系
    dependencies=[Depends(get_token_header)],
    responses={404: {"descroption": "Not found"}}
)

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app="main:app", host="127.0.0.1", port=8000, reload=True)