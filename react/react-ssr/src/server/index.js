// commonjs es
import express from 'express';
import React from 'react';
// client dom 
// 谁提供：虚拟 DOM
import { renderToString } from 'react-dom/server';
import Header from '../components/Header.jsx';


const app = express();
// static 目录做了静态资源的一个映射
// koa-static
app.use(express.static('static'))
// ejs jsp jade vue-template:  if for 
app.get('*', (req, res) => {
  // 入口组件 jsx 
  const App = (<Header />);
  // jsx -> babel -> React.createElement()
  const htmlStr = renderToString(App);
  console.log(htmlStr);
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${htmlStr}</div>
    <script src="/index.js"></script>
  </body>
  </html>`);
})

app.listen(3000, () => {
  console.log('server is running 3000 port');
})