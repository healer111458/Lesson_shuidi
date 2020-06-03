// 二维码schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const QRCodeSchema = new Schema({
  // _id
  _allreadyUsed: {   //为true 代表已用过
    type: Boolean,
    default: false
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  scanned: {    //代表扫过
    type: Boolean,
    default: false
  },

  url: String,   //跳转地址

  status:{        //转态码
      type:Number,
      default:0     /*0.未确定   1.确定授权  -1.取消授权 */
  },

  userInfo: {     //用户信息
    type: Object,
    default: {}
  },

  createdAt: {     //创建时间
    type: Date,
    default: Date.now
  },

  expireAt: {      //失效时间
    type: Date
  }
})

module.exports=mongoose.model('QRCode',QRCodeSchema)
