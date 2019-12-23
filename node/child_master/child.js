//process  node进程的全局对象
process.on('message', (str) => {
    console.log('child ' + str);
    //子进程 把活给干完后，可以偷偷的跑到另外一个CPU  再挂载一个进程
    //可以把多核的能力运用起来
    process.send('hehe');
})