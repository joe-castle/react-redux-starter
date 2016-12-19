'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let entry;
let cssLoader;
let plugins = [
  new HtmlWebpackPlugin({
    title: 'React-Redux Starter Todo Example',
    description: 'A starter project for react and redux',
    inject: true,
    template: './src/render/template.html',
  })
];

if (process.env.NODE_ENV === 'production') {
  entry = './src/index';
  plugins = plugins.concat([
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ]);
  cssLoader = ExtractTextPlugin.extract('style', 'css!postcss!stylus');
} else {
  entry = [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index',
  ];
  plugins = plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
  ]);
  cssLoader = 'style!css!postcss!stylus';
}

module.exports = {
  entry,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.styl$/, loader: cssLoader },
    ],
  },
  postcss: [autoprefixer],
  devtool: 'source-map',
};
