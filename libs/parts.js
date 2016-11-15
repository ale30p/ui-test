import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const stylesLoaders = [
  'style',
  'css?importLoaders=1',
  'postcss-loader?sourceMap=inline'
];

const styleLoad = [ ExtractTextPlugin.loader({ remove: true, extract: true, omit: 1 }),
  'style',
  'css?importLoaders=1',
  'postcss-loader?sourceMap=inline'
];

exports.setupCSS = function() {
  return {
    module: {
      loaders: [
        { test: /\.scss$/, loaders: [...stylesLoaders, 'sass?sourceMap'] },
        { test: /\.css$/, loaders: stylesLoaders },
      ]
    },
    postcss: function () {
      return [autoprefixer, cssnano];
    }
  };
}

exports.extractCSS = function() {
  return {
    module: {
      loaders: [
        { test: /\.scss$/, loaders: [ ...styleLoad, 'sass'] },
        { test: /\.css$/, loaders: styleLoad },
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  };
}

exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  };
}
