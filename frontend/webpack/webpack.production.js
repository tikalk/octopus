const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');


const plugins = [
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin([{ from: path.resolve('public'), to: path.resolve('dist'), force: true }]),
  new CompressionPlugin({
    test: /\.js(\?.*)?$/i,
    deleteOriginalAssets: false
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve('./public/index.html'),
    minify: true
  }),
  new InjectManifest({
    swSrc: 'src/sw.js',
    globDirectory: './public',
    globPatterns: [
      'site.webmanifest',                
      '**/*.css',
      '**/*.js',                        
    ],
    swDest: 'sw.js',
  })
];

const tree = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve('./dist'),
    publicPath: '',
    filename: 'assets/app.js'
  }
};

module.exports = {
  tree,
  plugins
};
