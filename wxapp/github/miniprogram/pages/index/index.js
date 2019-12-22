const userUtils = require('../../utils/users.js')

Page({
    commitAccount(e) {
        let values = e.detail.value; //detail  小程序form提交
        // console.log(values);
        let { username, password } = values
        //检测表单完整性   排除空格键 
        if (!username.replace(/\s+/g, '')) {
            wx.showToast({
                title: '请输入用户名',
                icon: 'none'
            })
            return;
        }
        if (!password.replace(/\s+/g, '')) {
            wx.showToast({
                title: '请输入密码',
                icon: 'none'
            })
            return;
        }
        const token = this.getToken(username, password);
        console.log(token);
        this.login(token);
    },
    login(token) {
        wx.showLoading({
                title: '正在登陆'
            })
            //将界面与网络请求分离
        userUtils
            .signIn(token)
            .then((data) => {
                console.log(data);
                wx.showToast({
                    title: '登录成功',
                    icon: 'none'
                })
            })
    },
    getToken(username, password) {
        const str = username + ':' + password
        return 'Basic ' + wx.arrayBufferToBase64(new Uint8Array([...str].map(char => char.charCodeAt(0))))
    }
})