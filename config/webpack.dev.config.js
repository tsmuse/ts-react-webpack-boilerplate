const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.s?[c]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js'} } },
          'sass-loader',
        ]
      }
    ]
  }
});