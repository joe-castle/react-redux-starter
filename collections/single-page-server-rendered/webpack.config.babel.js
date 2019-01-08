const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { getIfUtils } = require('webpack-config-utils')

module.exports = (env, config) => {
  const { ifDevelopment } = getIfUtils(config.mode)

  return {
    entry: ifDevelopment(
      [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/index'
      ],
      // ifProduction
      './src/index'
    ),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist', 'assets'),
      publicPath: '/assets'
    },
    plugins: [
      ...ifDevelopment(
        [
          new webpack.HotModuleReplacementPlugin(),
          new FriendlyErrorsWebpackPlugin()
        ],
        // ifProduction
        [
          new BundleAnalyzerPlugin()
        ]
      )
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.styl$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'stylus-loader'
          ],
          exclude: /node_modules/
        }
      ]
    },
    devtool: ifDevelopment(
      '#cheap-module-eval-source-map',
      // ifProduction
      '#source-map'
    ),
    devServer: {
      publicPath: '/assets',
      port: 3001,
      hot: true,
      quiet: true,
      proxy: {
        '*': 'http://localhost:3000'
      }
    }
  }
}
