const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyJSPlugin = require('babel-minify-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  optimization: {
    minimizer: [
      new MinifyJSPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.s?[c]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' } } },
          'sass-loader',
        ]
      }
    ]
  },
  // source-map-generator.js is throwing an UnhandledPromiseRejection and I haven't figured out why
  // yet. This is turned off for now until I do. 
  // devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.Node_ENV': JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css' ,
      chunkFilename: '[id].css'
    })
  ]
});