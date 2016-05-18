'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

let entry = './src/index'
  , cssLoaders = ExtractTextPlugin.extract('style', '!css!postcss!sass')
  , jsLoaders = ['babel']
  , plugins = [
    // Injects configureStore based on NODE_ENV.
    // Enables hot reloader if in dev mode.
    new webpack.ProvidePlugin({configureStore: './store/configureStore'})
  ];

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat([
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      // Provides NODE_ENV to provide plugin for configureStore.
      // This is only required for build.
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]);
} else {
  entry = [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/index'
  ];
  plugins.push(new webpack.HotModuleReplacementPlugin());
  jsLoaders.unshift('react-hot');
  cssLoaders = 'style!css!postcss!sass';
}

module.exports = {
  entry,
  output: {
    path: `${__dirname}/../build/assets`,
    filename: 'bundle.js',
  },
  plugins,
  module: {
    loaders: [
      {test: /\.js$/, loaders: jsLoaders, exclude: /node_modules/},
      {test: /\.scss$/, loader: cssLoaders}
    ]
  },
  postcss: [autoprefixer],
  devtool: 'source-map',
  // Used in rendered html code, change for your project.
  metaTags: {
    title: 'React Redux Starter Project',
    description: 'React Redux Starter Project'
  }
};
