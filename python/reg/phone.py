# 用户通过命令行输入一段字符，判断是否有效的手机号
import re
def main():
  tel = input("请输入手机号：")
  print(tel)
  ret = re.match(r"^1[3568]\d{9}$",tel)
  print (ret)
  if ret:
      print("匹配成功")
  else:
      print("匹配失败")
if __name__ == "__main__":
 main()