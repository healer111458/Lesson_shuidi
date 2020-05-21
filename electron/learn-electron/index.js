let { app, BrowserWindow } = require('electron')  //node 端运行

app.on('ready',() => {
    win = new BrowserWindow()   //chromium 开始启动 桌面应用的代表就是窗口
    win.loadFile("index.html")
})