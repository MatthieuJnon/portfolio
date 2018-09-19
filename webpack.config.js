const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: {
    js: './src/index.js',
  },

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [{
      test: /\.(scss|sass)$/,
      use: 
        [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
    }]
  },


  plugins:[
    new CompressionPlugin({
      test: /\.js$/
    })
  ]

}