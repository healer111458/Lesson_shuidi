def fact(n):
    if n == 1:
      return 1
    return n*fact(n-1)
    # 自己调用自己，就叫递归
print(fact(8))