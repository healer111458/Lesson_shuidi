# 删除有序数组中的重复项
  前端入门容易，
  出身不好，教养也差，但一直努力尝试去做一个体面的人

  读题：
    sortedArr  =[1,1,2], 
    return length 2
   
- 一次遍历？
    res []    空间复杂度  O(n)s
    for  输出
    排好序  后面的一项一定会大于或等于前面的项
    等于要原地删除
    res.length
    抽象能力，数理逻辑
- 动图  
LeetCodeAnimation
    两个指针  pre cur
    - cur
      一直向前指  一次循环的每一项遍历
    - pre
      后面指向
      pre cur arr的前一个，后一个
    不相等时pre+1，
    相等时pre不动，回停下一格
    如果cur pre不一样是，pre+1 = cur
    从头到尾都是排好序的不重复
    每个位置放什么数？
    pre 指针  没有跟上 cur的速度，表示有重复
    pre cur n个空位
    pre + 1 删除，把当前cur的值交给pre
- 快慢指针
  1. 一次循环 cur++ 一直跑
  2. cur 与 pre arr[] 不相等时 cur 与 pre ++
     相等时 pre不加
  3. cur再走时，继续比较 新的cur 与旧的pre 不等时，pre++ 并且将 cur 值赋予新的pre
     把因为之前重复空出来的位置 给填上
  4. cur > length -> return length

- 数据结构 -> 链表
    [1,1,2] 链表
    LinkedList  结点next
    1 之后还是 1 使用next 将指向1 的指针改为指向2
    把数组要维持位置的快慢指针去除