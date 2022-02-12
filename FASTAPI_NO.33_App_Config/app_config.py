from fastapi import FastAPI

app = FastAPI(
    title="My Super Project",
    description="This is a bery fancy project, with auto docs for the API and everything",
    version="6.6.6",
)

@app.get("/items/")
async def read_items():
    return [{"name": "Foo"}]
  
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
    