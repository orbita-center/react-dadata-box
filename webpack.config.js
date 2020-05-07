const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProvidePlugin = require('webpack').ProvidePlugin;

process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  entry: './examples/src/index.tsx',
  resolve: {
    symlinks: false,
    cacheWithContext: false,
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'react-dadata-box': path.resolve(__dirname, './src/index.js'),
    },
  },
  output: {
    filename: './examples/dist/index.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts(x?)|js(x?))$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'examples/public/index.html',
      filename: 'index.html',
      inject: true,
    }),
    new ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
    open: true,
  },
};
