import re
# () 分组
re_telephone = re.compile(r'^(\d{3})-(\d{5,8})$')
print(re_telephone.match('010-12345').groups())