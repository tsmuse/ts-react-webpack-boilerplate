
const path = require('path');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module : {
    rules : [
      {
        test: /\.js$/,
        exclude : /node_modules/,
        use : {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new CleanWebPackPlugin(['dist'])
  ]
}