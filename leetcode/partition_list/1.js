function ListNode(val) {
  this.val = val
  this.next = null;
}
var partition = function(head, x){
  var smaller = dummySmaller = new ListNode(-1);  // -1 正数  小分区
  var greater = dummyGreater = new ListNode(-1);  //大分区
  while(head){
    //链表的遍历    
    console.log(head.val);
    //head为动态
    if(head.val < x){
      smaller.next = head  //进入较小值分区
      smaller = smaller.next  //更新smaler分区
    }else{
      greater.next = head  //进入较大值分区
      greater = greater.next  //更新bigger分区
    }
    // console.log()
    // 两个分区合并
    // greater 已经变成了大分区中的最大值
    head = head.next;
  }
  smaller.next = dummyGreater.next;  //greater的第一个节点
  greater.next = null;  //任何一个链表最后一个节点的next属性为空
  return dummySmaller.next;  //返回了分隔后的头节点
}
const n1 = new ListNode(1);
const n2 = new ListNode(4);
const n3 = new ListNode(3);
const n4 = new ListNode(2);
const n5 = new ListNode(5);
const n6 = new ListNode(2);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
console.log(n1);
console.log(partition(n1,3))