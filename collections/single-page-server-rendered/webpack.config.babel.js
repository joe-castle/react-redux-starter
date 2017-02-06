import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import eslintFriendlyFormatter from 'eslint-friendly-formatter';
import { getIfUtils } from 'webpack-config-utils';

export default (env) => {
  const { ifDevelopment } = getIfUtils(env);

  return {
    entry: ifDevelopment(
      [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/index',
      ],
      // ifProduction
      './src/index',
    ),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    plugins: [
      ...ifDevelopment(
        [new webpack.HotModuleReplacementPlugin()],
        // ifProduction
        [
          new webpack.optimize.UglifyJsPlugin(),
          new webpack.DefinePlugin({ 'process.env': { NODE_ENV: 'production' } }),
        ],
      ),
      new HtmlWebpackPlugin({
        title: 'React-Redux Starter Todo Example',
        description: 'A starter project for react and redux',
        inject: true,
        template: './src/render/template.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          options: {
            formatter: eslintFriendlyFormatter,
          },
        },
        {
          test: /\.js$/,
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
          exclude: /node_modules/,
        },
        {
          test: /\.styl$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer],
              },
            },
            'stylus-loader',
          ],
          exclude: /node_modules/,
        },
      ],
    },
    devtool: ifDevelopment(
      'cheap-module-eval-source-map',
      // ifProduction
      'source-map',
    ),
    devServer: {
      port: 3001,
      hot: true,
    },
  };
};
