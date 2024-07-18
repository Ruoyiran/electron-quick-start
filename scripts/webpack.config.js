const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = function () {
  const args = Array.prototype.slice.call(arguments);
  return path.resolve.apply(path, [__dirname, '..'].concat(args));
};

module.exports = {
  devtool: 'inline-cheap-module-source-map',
  entry: [
    './src/entry/index.tsx',
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': resolve('src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./public/index.html'),
    }),
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  }
};
