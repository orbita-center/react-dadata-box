const webpack = require('webpack');
const path = require('path');

process.env.NODE_ENV = 'production';

module.exports = {
  mode: 'production',
  entry:'./src/index.js',
  output: {
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true
  },
  externals: {
    react: 'commonjs react'
  }
};
