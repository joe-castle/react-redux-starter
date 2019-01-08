import { resolve } from 'path';
import webpack from 'webpack';
import chalk from 'chalk';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import eslintFriendlyFormatter from 'eslint-friendly-formatter';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';

export default (env) => {
  const { ifProd, ifNotProd } = getIfUtils(env);
  const devServerPort = 3001;

  return {
    cache: ifProd(),
    entry: {
      app: ifProd(
        './src/index',
        // Development mode
        [
          // activate HMR for React
          'react-hot-loader/patch',

          // bundle the client for webpack-dev-server
          // and connect to the provided endpoint
          `webpack-dev-server/client?http://localhost:${devServerPort}`,

          // bundle the client for hot reloading
          // only- means to only hot reload for successful updates
          'webpack/hot/only-dev-server',

          // the entry point of our app
          './src/index',
        ],
      )
    },

    output: {
      filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
      path: resolve(__dirname, 'dist'),
      publicPath: '/',
    },

    resolve: {
      extensions: ['.js', '.json'],
      modules: [
        resolve(__dirname, 'src'),
        resolve(__dirname, 'node_modules'),
      ]
    },

    // If prod use full on source-maps, for dev use quick cheap source map
    devtool: ifProd('source-map', 'cheap-module-eval-source-map'),

    devServer: {
      port: devServerPort,
      host: '0.0.0.0',
      historyApiFallback: true,
      hot: true,
      inline: true,
      quiet: true,
      stats: {
        // Cleans up logging output
        // See https://github.com/webpack/webpack-dev-server/issues/68
        chunkModules: false,
      },
    },

    module: {
      rules: removeEmpty([
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [resolve(__dirname, 'src')],
          exclude: /node_modules/,
          options: {
            formatter: eslintFriendlyFormatter,
          },
        },

        {
          test: /\.js$/,
          include: [resolve(__dirname, 'src')],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                // Enables webpack tree-shaking
                ['es2015', { modules: false }],
                'stage-0',
                'react',
              ],
            },
          },
        },

        // Moves CSS to external file.
        ifProd({
          test: /\.styl$/,
          include: [resolve(__dirname, 'src')],
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader',
              'stylus-loader',
            ]
          })
        }),

        // ExtractTextPlugin breaks HMR so it's not used in development.
        ifNotProd({
          test: /\.styl$/,
          include: [resolve(__dirname, 'src')],
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'stylus-loader',
          ],
        }),
      ]),
    },

    plugins: removeEmpty([
      new ProgressBarPlugin({
        complete: chalk.blue.bold('='),
        format: `${chalk.green.bold('building')} [:bar] ${chalk.green.bold(':percent')} (:elapseds) :msg`,
        clear: false
      }),

      // Pulls created vendor.dll file in here.
      new webpack.DllReferencePlugin({
        context: resolve(__dirname, 'src'),
        manifest: require('./src/vendor/vendor.json')
      }),

      // Moves vendor files as this isn't handled by standard config.
      new CopyWebpackPlugin([{
        context: resolve(__dirname, 'src/vendor'),
        from: '**/*',
        to: 'vendor',
        copyUnmodified: true
      }]),

      new HtmlWebpackPlugin({
        title: 'React-Redux Starter Todo Example',
        description: 'A starter project for react and redux',
        inject: true,
        template: './src/render/template.html',
      }),

      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        },
      })),

      ifProd(new webpack.DefinePlugin({ 
        'process.env': { 
          NODE_ENV: ifProd('"production"', '"development"') 
        } 
      })),
      
      ifProd(new ExtractTextPlugin({
        filename: './css/[name]-[hash].css',
        allChunks: true
      })),

      ifNotProd(new webpack.HotModuleReplacementPlugin()),
      ifNotProd(new webpack.NamedModulesPlugin()),
      ifNotProd(new FriendlyErrorsWebpackPlugin()),
    ]),
  };
};
