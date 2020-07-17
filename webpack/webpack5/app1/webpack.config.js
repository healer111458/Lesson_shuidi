// 模块联邦
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

module.exports = {
  mode: 'development',
  entry: './src/Button.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',   // 起个名字
      library: { type: 'var', name: 'app1' },  // 新建变量
      filename: 'remoteEntry.js',
      exposes: {                            // app1是一个项目，项目对外出去一个 
        './Button': join(__dirname, './src/Button.jsx'),
      },
      shared: {
        'react': {
          eager: true,
        },
        "react-dom": {
          eager: true,
        }
      }    // 暴露出去这个模块可以被其他地方引入
      // 暴露出去这个模块 和 引用他的模块 他俩公共的依赖 
    }),
    // new HTMLWebpackPlugin({ template: './public/index.html' }),
  ],
};