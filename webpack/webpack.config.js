'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

let entry, jsLoaders
  , plugins = [
    new webpack.ProvidePlugin({
      // Injects Root and configureStore based on NODE_ENV.
      // Provides Redux devtools if in development,
      // and strips them if in production.
      // See /src/frontend/root.js.
      Root: './root',
      configureStore: './store/configure-store'
    }),
    new HtmlWebpackPlugin({
      // Change the title for new projects
      title: 'React Starter Project',
      template: './src/frontend/index.template.html',
      inject: true
    }),
    new ExtractTextPlugin('bundle.css')
  ];

if (process.env.NODE_ENV === 'production') {
  entry = './src/frontend/index';
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      // Provides NODE_ENV to provide plugin, root and configure, through webpack.
      // This is only required for build.
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]);
  jsLoaders = ['babel'];
} else {
  entry = [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/frontend/index'
  ];
  plugins.push(new webpack.HotModuleReplacementPlugin());
  jsLoaders = ['react-hot', 'babel'];
}

module.exports = {
  entry: entry,
  output: {
    path: `${__dirname}/../src/public`,
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: jsLoaders,
      exclude: /node_modules/
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
    }]
  },
  postcss: () => [autoprefixer],
  devtool: 'source-map'
};
