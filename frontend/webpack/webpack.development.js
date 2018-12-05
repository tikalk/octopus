const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve('public/index.html'),
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
];

const tree = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve('./dist'),
    publicPath: './assets/',
    filename: 'app.js',
  },
  devServer: {
    hot: true,
    port: 8080,
    contentBase: path.resolve('dist'),
    publicPath: path.resolve('dist'),
  },
};

module.exports = {
  tree,
  plugins,
};