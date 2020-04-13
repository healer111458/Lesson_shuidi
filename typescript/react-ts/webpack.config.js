const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = __dirname;

module.exports = {
 context: path.join(basePath, 'src'),    //上下文环境 src
 resolve: {    //帮处理哪些静态文件
   extensions: ['.js', '.ts'],  //支持ts typescript js  .styl .sacc 
 },
 entry: {
   app: './index.ts',   //webpack 打包入口可以多个
//    vendorStyles: [      //bootstrap css 框架  vue 业务代码在改变,但是框架要被打包的，但不会被修改，单独打包
//      '../node_modules/bootstrap/dist/css/bootstrap.css',    //yarn add bootstrap
//    ],
 },
 output: {
   path: path.join(basePath, 'dist'),
   filename: '[name].js',   //app  hash
 },
 module: {
   rules: [
       //.ts  -> .js -> babel
     {
       test: /\.ts$/,
       exclude: /node_modules/,
       loader: 'awesome-typescript-loader',   //将ts转为js
       options: {
         useBabel: true,
       },
     },
    //  {
    //    test: /\.css$/,
    //    use: [MiniCssExtractPlugin.loader, 'css-loader'],
    //  },
    //  {
    //    test: /\.(png|jpg|gif|svg)$/,    //压缩图片 base64(最小的)
    //    loader: 'file-loader',
    //    options: {
    //      name: 'assets/img/[name].[ext]?[hash]',   //hash  文件指纹
    //    },
    //  },
   ],
 },
 // For development https://webpack.js.org/configuration/devtool/#for-development
 devtool: 'inline-source-map',
 devServer: {    //webpack-dev-server
   port: 8090,
   noInfo: true,
 },
 plugins: [   //插件
   // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
   new HtmlWebpackPlugin({
     filename: 'index.html', // Name of file in ./dist/
     template: 'index.html', // Name of template in ./src
     hash: true,
   }),
//    new MiniCssExtractPlugin({
//      filename: '[name].css',
//      chunkFilename: '[id].css',
//    }),
 ],
};