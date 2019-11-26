- 数据可视化
  使用requestAnimationFrame  请求运动帧
  添加animation(){
      console.log('------');
      requsestAnimatinFrame(function(){
        animation();  //递归 内存泄漏
      })
      
      
  }animation();

- canvas 是画布
  绘制的API 画布默认大小?
  canvas.style.width 标准的
  canvas.width html 属性 不接受单位 只接受数值
  ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillText(2,100,100)
  requestAnimation + clearRect();