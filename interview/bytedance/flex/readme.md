- 2020夏季实习头条面试题
### flex 弓箭分配规则
  1. flex布局
      flex-grow     伸
      flex-shrink   缩
      
     1. left + right > flex 盒子的宽度
        flex-shrink  2:1 此时left，right是多少
        规则：cssRules
        - 超出部分：500 + 400 - 600 = 300
        - left right 需要分担伸缩比例
          超出分配的比例部分：500*2 : 400*1 -> 5 : 2
        - left  500 - 300*5/7 = 285.72 px;
        - right 400 - 300*2/7 = 314.59 px;

     2. 盒子 padding 子元素
        计算方式需要改变，标准盒模型
        left:  500 + 40*2
        right: 400 + 20*2
        - 超出部分： 580 + 440 - 600 = 420
      * - 分配比例：不包含padding： 5 ：2
        left:  580 - 420*5/7 = 280
        right: 440 - 420*2/7 = 320

     3. box-sizing:box-border  IE盒模型
        - 超出部分： 500 + 400 - 600 = 300
        - 分配比例： 包含padding 2*420 ：360*1 = 7 ：3
        - left:  500 - 300*7/10 = 290
        - right: 400 - 300*3/10 = 310

     4. flex-grow 按值的比例分配
