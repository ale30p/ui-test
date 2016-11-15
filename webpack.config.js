import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import merge from 'webpack-merge';
import validate from 'webpack-validator';
import webpack from 'webpack';
import parts from './libs/parts';

/*global __dirname process module:true*/
/*eslint no-undef: "error"*/
const PATHS = {
  app: path.join(__dirname, 'client/app/app.js'),
  dist: path.join(__dirname, 'dist')
};

const vendor = ["angular"];

const common = {
  entry: {
    app: PATHS.app,
    vendor
  },
  output: {
    sourceMapFilename: '[file].map',
    path: PATHS.dist,
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/vendor/, /node_modules/], loader: 'ng-annotate' },
      { test: /\.js$/, exclude: [/node_modules/], loader: 'babel'},
      { test: /\.html$/, loader: 'raw' },
      { test: /\.(jpe|jpg|gif|otf|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]' },
      { test: /\.json$/, loaders: ["json-loader"]}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client/index.html"), // Load a custom template
      inject: true // Inject all scripts into the body
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:3100/'
    },
    {
      reload: false
    })
  ]
};

var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'dist':
    config = merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.minify(),
      parts.extractCSS()
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.setupCSS()
    );
}

module.exports = validate(config);

