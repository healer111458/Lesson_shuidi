// // 1.回调
fs.readFile('./', (content) => {
  setTimeout(() => {
    content += '123';
    fs.append('./', content, (err) => {
    })
  }, 3000)
})