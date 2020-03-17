const _ = require('lodash')
const fs = require('fs')
const path = require('path')

//映射  d 将某文件夹下的文件为模块使用

const mapDir = d => {
    const tree = {}

    //获取当前文件夹下的所有文件夹和文件  分成两组：一组文件夹，一组文件
    const [dirs,files] = _(fs.readdirSync(d)).partition(p => fs.statSync(path.join(d,p)).isDirectory())       
    //partion：划分
    //返回true ->映射文件夹
    dirs.forEach(dir => {
        tree[dir] = mapDir(path.join(d,dir))
    });
    //映射文件
    files.forEach(file => {
        //获取文件后缀名
        if(path.extname(file) === '.js') {
            tree[path.basename(file,'.js')] = require(path.join(d,file))
        }
    })

    return tree
}
//默认导出当前文件夹的映射
module.exports = mapDir(path.join(__dirname))