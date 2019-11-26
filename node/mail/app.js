const nodemailer =  require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'qq',//腾讯
    port:465,
    secureConnection:true,
    auth:{
        user:'1141340018@qq.com',
        pass:'kquvbatrvhtohjga'
    }
})

let mailOption = {
    from: "光棍节前的呐喊<1141340018@qq.com>",
    to: "2762319789@qq.com",
    subject:'双十一买什么？',
    html: '<b>淘宝京东拼多多'
}

transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        return console.log(error)

    }
    console.log('Message send: %s',info,messageId);
}
)
    