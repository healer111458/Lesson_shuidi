function TreeNode (val) { //形成一棵树的结点
  this.val = val;
  this.left = this.right = null;  //左指针 ，右指针
}
  //树：
  //       1(root)
  //    2     3
  // 4   5   6   7
  //二叉树
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
  //一个结点左右指向另外两个结点 递归执行 每个子结点(左节点，右节点) 变成新的根节点
  //推出条件是 叶子结点
  //如何打印输出树: 1 2 4 5 3 6 7 先序遍历
  //递归法写树的遍历 

  var inorderTraversal = function(root) {
    let arr = []; //放节点的结果数组  将树 => 数组
    const inorder = root => {
      if(root ===null) return null; //退出条件
      //先序
      arr.push(root.val);  //根结点先进入 再左结点 后右结点
      inorder(root.left);  //左子树一直递归
      inorder(root.right); //右子树一直递归
      //中序
      // inorder(root.left);  //左子树一直递归
      // arr.push(root.val);  //先左结点 再根节点 后右结点
      // inorder(root.right); //右子树一直递归      
      //后序
      // inorder(root.right); //右子树一直递归
      // arr.push(root.val);
      // inorder(root.left);  //左子树一直递归      
    }
    inorder(root);
    return arr;
  }
  //中左右
  console.log(inorderTraversal(a1));
