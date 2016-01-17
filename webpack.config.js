'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  module.exports = [{
    entry: './src/frontend/index',
    output: {
      path: path.join(__dirname, 'build', 'public'),
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.ProvidePlugin({
        // Injects Root and configureStore based on NODE_ENV.
        // Provides Redux devtools if in development,
        // and strips them if in production.
        // See /src/frontend/root.js.
        Root: './root',
        configureStore: './store/configure-store'
      }),
      new webpack.DefinePlugin({
        // Provides the NODE_ENV to the above, root and config, through webpack.
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new HtmlWebpackPlugin({
        // Change this for new projects
        title: 'React Start Project',
        template: './src/frontend/index.template.html',
        inject: true
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin('bundle.css')
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
      }]
    },
    devtool: 'source-map'
  },{
    entry: './src/backend/',
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'server.js',
      libraryTarget: 'commonjs2'
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    // stops webpack from converting nodejs modules to a variable.
    externals: /^[a-z\-0-9]+$/,
  }];
}

if (process.env.NODE_ENV === 'development') {
  module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      './src/frontend/index'
    ],
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        // Injects Root and configureStore based on NODE_ENV.
        // Provides Redux devtools if in development,
        // and strips them if in production.
        // See /src/frontend/root.js.
        Root: './root',
        configureStore: './store/configure-store'
      }),
      new HtmlWebpackPlugin({
        // Change this for new projects
        title: 'React Start Project',
        template: './src/frontend/index.template.html',
        inject: true
      })
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },{
        test: /\.scss$/,
        loaders: ["style", "css", "autoprefixer", "sass"]
      }]
    },
  };
}
