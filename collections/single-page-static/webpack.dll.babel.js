import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { resolve } from 'path';
import { dependencies } from './package.json';
/**
 * This breaks out the vendor files into a separate file that drastically
 * speeds up webpack dev builds. See the link below for details.
 * http://engineering.invisionapp.com/post/optimizing-webpack/
 */
export default () => ({
  entry: {
    vendor: Object.keys(dependencies),
  },

  output: {
    path: resolve(__dirname, 'src', 'vendor'),
    filename: '[name].dll.js',
    library: '[name]',
  },

  resolve: {
    modules: [
      resolve(__dirname, 'node_modules'),
    ],
  },

  plugins: [
    new ProgressBarPlugin(),

    new webpack.DllPlugin({
      path: resolve(__dirname, 'src', 'vendor', '[name].json'),
      name: '[name]',
      context: resolve(__dirname, 'src'),
    }),

    // new webpack.optimize.UglifyJsPlugin(),
  ],
});
