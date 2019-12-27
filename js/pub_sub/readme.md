- 事件监听的执行逻辑：
    浏览器 chrome.exe 打开时启动一个进程
    js 是chrome里的语言编译器来执行
    html + css DOM树  树：数据结构
    js 执行作为脚本
    事件 addlisten  是异步执行
- 注册事件：（micro event 回调函数）
    
- 事件发生时怎么执行的：
    js 单线程语言   onload
    轮循注册事件的地方
    
订阅 发布者模式

房：楼盘 -> 发布者(发布一个有房卖的信息)
买房者 -> 订阅者()
建模：


- listen 添加订阅者
    saleOffice.clientList.push(fn);  形成订阅关系
- saleOffice  发布者
    trigger  有事通知  把所有的订阅者都执行一次
- apply 指定除函数运行外，内部的this指向  arguments 形参
- document.body.addEventListener('click',fn);
    发布者 saleOffice.document.body  有订阅者
    订阅者 fn   document.body.events = []
    click  
    trigger 
        event.each(fn)
