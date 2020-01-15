function ListNode(val) {
  this.val = val;
  this.next = null;
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(n1);
var oddEvenList = function(head) {
  //将奇偶结点分开放置与两个数组中
  //将奇链表的尾结点指向偶链表的头结点
  //空间复杂度将不是O（1）  不是原地算法
  if(!head || !head.next) { //该链表为空或只有一个元素
    return head
  }
  var odd = [];  //奇数结点放置于odd数组中
  var even = []  //偶数结点放置于even数组中
  var f =true;   //奇偶标记变量
  while(head) { //一次遍历
    var next = head.next;
    head.next = null; //将原来的链表关系取消
    head = next;
    if(f) { //第一次判定  或f 为true
      odd.push(head)  //奇数结点数组，每一个结点的next 都被取消
    }else {
      even.push(head);
    }
    f = !f; //一奇一偶
    head = next;
  }
  //重建两个分链表的顺序  非原地算法
  for(var i = 0;i < odd.length-1;i++)
  odd[i].next = odd[i+1];
  for(var i = 0;i < even.length-1;i++)
  even[i].next = even[i+1];
  //将奇链表与偶链表连接起来
  odd[odd.length-1].next = even[0];
  return odd[0];
}
console.log(oddEvenList(n1));