const { mysql } = require('../../mysql')

module.exports = async (ctx) => {
    //获取轮播图数据，并传递给前端
    const banner = await mysql('nideshop_ad').where({
        ad_position_id: 1
    }).select()
    ctx.body = {
        'banner':banner
    }
}