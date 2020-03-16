const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new CopyWebpackPlugin([{ from: path.resolve('public'), to: path.resolve('dist'), force: true }]),
  new HtmlWebpackPlugin({
    inject: true,
    hash: true,
    template: './public/index.html',
    filename: 'index.html'
  })  
];

const tree = {
  devtool: 'source-map',
  entry: [path.resolve('./src/index.js')],
  output: {
    path: path.resolve('dist')
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: 'minimal',
    inline: true,
    port: 8080
  }
};

module.exports = {
  tree,
  plugins
};
