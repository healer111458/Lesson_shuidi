-页面先写结构
类名语义化 .key>.sound  一个盒子
从外到内，
良好的结构是页面的基础
写结构时不用考虑样式
-样式
 块级元素 block (默认宽度100%)
 行内元素？
 弹性布局
  display:flex;
  所有子元素的会计能力被干掉
  min-height:100vh;
  justify-content:center;
  align-items:center;
-html 默认的字体大小16px
  rem跟vh 一样都是相对单位
  rem 是相对于html的字体大小
  0.4rem = 16px * 0.4 =6.389px
  在手机端px 不准确   适配所有手机
-盒模型
 margin + border + padding + content