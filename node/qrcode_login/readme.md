- PC端扫码登陆方案，并需要传递哪些信息

1. 头条懂车帝：比较复杂的业务考题
    jwt(cookie session)  轮询怎么做 mongodb  二维码(node) 扫码登陆的原理
    输入 URL 浏览器发生什么？
2. node  前端  登录  api 的业务分开理解

- 需求
    1. 二维码：包含一段信息的图片  使用node 的 qrcode 生成
    2. 微信App(Uniapp, RN) 手机微信已经登陆->扫码
- 扫码方式：手机App 微信、QQ、gihub  需要已经登录(前提) cookie(token)
- 扫码后 App里的用户头像、id、登陆状态 都通过扫码后传到 PC 端
- 结果是 PC 站登录成功  服务器端需要识别身份 
  - 使用技术：token oAuth 代替 cookie
    头像、id、用户名 放入二维码中
    二维码可以等待手机端的扫描，二维码会发送一个ajax post请求

- PC登录过程：
二维码会首先在mongodb中存下一个qrcode_id 并设置 time(为了安全性) 会 expires 之后 node 继续生成
手机App扫码时，token 会收到 ajax post 请求并把信息传递过去 
mongodb 二维码 状态为登录中，user信息，token 也会传递到PC页面中 并成功登录PC端
之后跳转登录成功页面

 - 轮询：为了安全问题 设置过期时间 qrcode 会自动刷新



 1. node 插入一条 qrcode 记录 {qrcode_id,erpires_at,create_at} 生成一个二维码图片
 2. 显示一个 PC 端登录页面 将二维码显示出来
 3. 扫码 达到 qrcodeId 使用 postman 来模拟过程