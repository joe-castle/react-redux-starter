'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

let entry, cssLoaders = 'style!css!postcss!sass', jsLoaders = ['babel']
  , plugins = [
    new webpack.ProvidePlugin({
      // Injects configureStore based on NODE_ENV.
      // Enables hot reloader if in dev mode.
      configureStore: './store/configure-store'
    })
    // new HtmlWebpackPlugin({
    //   // Change the title for new projects
    //   title: 'React Starter Project',
    //   description: 'React-Redux Starter Project',
    //   template: './src/index.template.html',
    //   inject: true
    // })
  ];

if (process.env.NODE_ENV === 'production') {
  entry = './src/index';
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
  jsLoaders = ['babel'];
  cssLoaders = ExtractTextPlugin.extract(cssLoaders);
} else {
  entry = [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/index'
  ];
  plugins.push(new webpack.HotModuleReplacementPlugin());
  jsLoaders.unshift('react-hot');
}

module.exports = {
  entry: entry,
  output: {
    path: `${__dirname}/../build`,
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    loaders: [
      { test: /\.js$/, loaders: jsLoaders, exclude: /node_modules/},
      { test: /\.scss$/, loader: cssLoaders}
    ]
  },
  postcss: [autoprefixer],
  devtool: 'source-map'
};
