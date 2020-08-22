 - 60fps  浏览器最好的渲染速度   60帧/s
    1000/60 -> 一帧花费16.6ms
    超过16.6ms将会出现卡顿
    出现一个卡顿会导致浏览器其他功能无法正常进行
    eg：浏览器处理一个动态图片，出现卡顿，导致用户输入无法正常实现
 - 浏览器一帧要处理的事件：
    JavaScript-style-layout-paint-composite
    layout、paint(非必经)

   - DOM tree
        任何语言在浏览器运行前都是字符串  浏览器将其解析为 DOM 树   eg： html文件中每个节点都有父子关系，然后将其分离出来

   - Render tree
        将每个节点的样式渲染到 DOM 树中对应的节点上。
    
   - Layout tree
        布局树 节点具体放置浏览器的那个位置
   - Paint tree
        浏览器结合GPU渲染1
   - Composite tree
        类似 PS 图层 Layers 每个网页都是立体的
        每个节点一层一层的堆叠起来实现一个网页平面效果

    - relayout 重排 repaint 重绘
        改变bgc，box-shadow... 只会触发重绘
        改变width，height... 只会触发重排
    1. 改变css属性时，尽量不引起layout，paint的改变
        eg：transform、cursor