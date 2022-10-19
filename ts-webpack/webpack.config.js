"use strict";

const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.ts",
  context: path.resolve(__dirname),
  //指定打包文件所在目录
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    //打包后的文件
    filename: "bundle.js",
    publicPath: "/dist",
    clean: true,
  },
  //指定打包时使用的模块，工具，插件
  module: {
    //指定要加载的规则

    rules: [
      {
        //test指定的是规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: [{
          loader: 'babel-loader',
          options: {
            //设置预定义的环境
            presets: [[
              //指定环境的插件
              '@babel/preset-env'
              //配置信息
              ,{
                targets:{"chrome":'88'}
              }
            ]
              
            ],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }, "ts-loader"],
        //要排除的文件
        exclude: "/ts-webpack/node_modules",
      },
    ],
  },
  devServer: {
    static: "./dist",
  },

  //用来设置引用模块，以ts为模块导入需要此配置
  resolve: { extensions: [".ts", ".js"] },
  devtool: "source-map",
  mode: " development",
  plugins: [
    //打包生成html插件，自动配置打包js文件
    new htmlPlugin({ template: "./src/index.html" }),
  ],
};
