var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/app.ts',
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader', 
          'angular2-template-loader', 
          'angular2-router-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        /* Rule for `styleUrls` within @Component annotations */
        test: /\.styles\.css$/,
        include: /src/,
        loaders: ['raw-loader']
      },
      {
        /* Rule for other CSS, such as vendor stylesheets */
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    })
  ],

  tslint: {
    // failOnHint: true,
    configuration: require('../tslint.json')
  }
};