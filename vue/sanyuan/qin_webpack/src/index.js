import { template } from "lodash";


const compiler = template('<h1><%= title %></h1>'); //设置为模板
// ajax , RIA 
const html = compiler({title: 'My Component'})


document.getElementById('app').innerHTML = html;