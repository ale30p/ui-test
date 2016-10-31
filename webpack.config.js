import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import merge from 'webpack-merge';
import validate from 'webpack-validator';
import webpack from 'webpack';

const PATHS = {
  app: path.join(__dirname, 'client/app/app.js'),
  dist: path.join(__dirname, 'dist')
};

const vendor = ["angular"];

const stylesLoaders = [
  'style',
  'css?importLoaders=1',
  'font-loader?format[]=truetype&format[]=woff&format[]=embedded-opentype'
];

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
  resolve : {
    root: [
      path.resolve('./client/vendor')
    ],
    alias: {
      "chico.js": "chico/ui/chico.min.js",
      "chico.css": "chico/ui/chico.min.css"
    }
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/vendor/, /node_modules/], loader: 'ng-annotate' },
      { test: /\.js$/, exclude: [/node_modules/], loader: 'babel'},
      { test: /\.html$/, loader: 'raw' },
      { test: /\.scss$/, loaders: [...stylesLoaders, 'sass?sourceMap'] },
      { test: /\.css$/, loaders: stylesLoaders },
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
    config = merge(common, {
      cache: true,
      devtool: 'source-map',
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      ]
    });
    break;
  default:
    config = merge(common, {
      devtool: 'eval-source-map'
    });
}

module.exports = validate(config);

