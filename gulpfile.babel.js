import gulp              from 'gulp';
import gutil             from 'gulp-util';
import eslint            from 'gulp-eslint';
import eslintrc          from './.eslintrc.json';
import rimraf            from 'rimraf';
import path              from 'path';
import stream            from 'webpack-stream';
import webpack           from 'webpack';
import WebpackConfig     from './webpack.config';
import WebpackDevServer  from 'webpack-dev-server';

let root = 'client';

let output = 'dist';

let resolveTo = function (p) {
  return function (glob = '') {
    return path.join(root, p, glob);
  };
};

let resolveToApp = resolveTo('app');

let paths = {
  sass: resolveToApp('**/*.scss'),
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output
};

gulp.task('webpack',
  gulp.series(clean, () => {
    return gulp.src(paths.entry)
      .pipe(stream(WebpackConfig))
      .pipe(gulp.dest(paths.output));
  }));

gulp.task('webpack-dev-server', (callback) => {
  let myConfig = Object.create(WebpackConfig);
  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    stats: {
      colors: true,
      errorDetails: true,
    },
    compress: true,
    contentBase: 'static/',
    watchOptions: {
      poll: 1000
    },
    hot: true,
    inline: true,
    historyApiFallback: true
  })
  .listen(3100, "localhost", function(err) {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:3100/webpack-dev-server/index.html");
    callback();
  });
});

gulp.task('default',
  gulp.series('webpack-dev-server'));

gulp.task('lint', function () {
  return gulp.src([
      'client/app/**/*.js',
      'webpack.config.js',
      'webpack.config.js'
    ])
    .pipe(eslint(eslintrc))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

function clean(done) {
  rimraf('dist', done);
}


