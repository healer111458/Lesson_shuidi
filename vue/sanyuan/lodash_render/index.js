const _ = require('lodash');
// jquery  dom $('#app').html('dfdfdfdf')
// $ -> jquery   _  lodash(underscore)
// _  dom  -> 查找节点， 修改  -> 数据改变 ->  动态html -> 编译 -》 更新到页面 
{/* <template>
    <Loading />
</template>
DOM细节， DOM交流  -》 模板编译  */}


const compiler = _.template('<h1><%= title %></h1>'); //设置为模板
// ajax , RIA 
const html = compiler({title: 'My Component'})


setTimeout(() => {
  console.log(compiler({title: 'New Component'}));
}, 3000)
// console.log(html);