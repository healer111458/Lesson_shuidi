// 中序 升华  不用递归  递归存在缺点：性能不高 
function TreeNode (val) { //形成一棵树的结点
  this.val = val;
  this.left = this.right = null;  //左指针 ，右指针
}
//完全二叉树
var a1 =new TreeNode(1);  //root 根结点
  var a2 =new TreeNode(2); 
  var a3 =new TreeNode(3);  //一颗最小的树
  a1.left = a2;
  a1.right = a3;
  // 2 的子树   形成递归模式
  var a4 =new TreeNode(4);
  var a5 =new TreeNode(5);
  a2.left = a4;
  a2.right =a5;
  var a6 =new TreeNode(6);
  var a7 =new TreeNode(7);
  a3.left = a6;
  a3.right = a7;

  var inorderTravaersal = function(root) {
    var stack = [], //栈
    result = [],    //数组
    cur;
     //栈 只有它的左子树 右子树都已经遍历完成后 才可以出栈
     cur = root;
     //循环一次 栈底存在元素
   while(stack.length > 0 || cur != null) {
     if(cur != null) {
       //什么时候发生
       stack.push(cur); //左子树入栈  同时cur不能进入result
       cur = cur.left;  //一直向左找
     }else{ //cur为空时
       cur =stack.pop(); //出栈 4
       result.push(cur.val); //进入结果数组
       cur = cur.right; //右子树入栈 但cur可以进入result
     }
   }
   return result;
  }
  console.log(inorderTravaersal(a1));