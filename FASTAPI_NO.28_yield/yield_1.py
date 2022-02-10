#yield返回一个迭代对象

def fun():
    try:
        print('1')
        db = 'SessionLocal()'
        yield db
    finally:
        print('3')
        
# for i in fun():
#     print(i)
#     print('2')
    
print(fun())
print(next(fun()))