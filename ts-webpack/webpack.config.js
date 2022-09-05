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
        use: "ts-loader",
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
  mode: "production",
  plugins: [
    //打包生成html插件，自动配置打包js文件
    new htmlPlugin({ template: "./src/index.html" }),
  ],
};
