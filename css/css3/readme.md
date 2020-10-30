# CSS3面试题

- display 各项值，及其作用：
    block 像块类型元素一样显示。
    none 隐藏。     
    inline-block 像行内元素一样显示，但其内容象块类型元素一样显示。      
    list-item 像块类型元素一样显示，并添加样式列表标记。     

- position 定位：
    *absolute
        生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。

    *fixed （老IE不支持）
        生成绝对定位的元素，相对于浏览器窗口进行定位。

    *relative
        生成相对定位的元素，相对于其正常位置进行定位。

- CSS3有哪些新特性：
    CSS3实现圆角（border-radius:8px），
    阴影（box-shadow:10px），
    对文字加特效（text-shadow），
    线性渐变（gradient），
    旋转（transform）
    transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg)；//旋转,缩放,定位,倾斜
    增加了更多的CSS选择器  多背景 rgba

- CSS 选择器：
    1. id选择器（ #myid）
    2. 类选择器（.myclassname）
    3. 标签选择器（div, h1, p）
    4. 相邻选择器（h1 + p）
    5. 子选择器（ul > li）
    6. 后代选择器（li a）
    7. 通配符选择器（ * ）
    8. 属性选择器（a[rel = "external"]）
    9. 伪类选择器（a: hover, li: nth - child）

- 可继承属性：
    可继承的样式： font-size font-family color, UL LI DL DD DT;
    不可继承的样式：border padding margin width height ;

- CSS3新增伪类
    p:first-of-type    选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
    p:last-of-type    选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
    p:only-of-type    选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
    p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
    p:nth-child(2)    选择属于其父元素的第二个子元素的每个 <p> 元素。
    :enabled  :disabled 控制表单控件的禁用状态。
    :checked        单选框或复选框被选中。

- 为什么要初始化CSS样式？
    因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

- CSS 权重问题：
    以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100，以下例子是演示各种定义的权重值：   
        /*权重为1*/
            div{    }
        /*权重为10*/
            .class1{    }
        /*权重为100*/
            #id1{    }
        /*权重为100+1=101*/
            #id1 div{    }
        /*权重为10+1=11*/
            .class1 div{    }
        /*权重为10+10+1=21*/
            .class1 .class2 div{    }

    如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现。