const gulp = require('gulp');
const rename = require('gulp-rename');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const del = require('del');
const connect = require('gulp-connect');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const less = require('gulp-less');
const minifyCss = require('gulp-minify-css');
const notify = require('gulp-notify');
// const version = require('./package.json').version;

// PATHs
const PATHs = {
  css: {
      src: [
        './src/index.less',
        './src/palette.less',
        './src/**/*.less',
        // './src/button-group/button-group.less',
        // './src/checkbox/checkbox.less',
        // './src/radio/radio.less',
        // './src/notification/notification.less',





        
      ],
      build: './dist',
      dev: './test/css/'
  },
  js: {
      src: ['./src/*.js'],
      build: './dist',
      dev: './test/js/'
  },
  html:{
    dev: './test/index.html'
  }
};

// ESlint
gulp.task('eslint', async () => {
  await gulp
    .src(PATHs.js.src,{allowEmpty: true})
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Clean
gulp.task('clean', async () => {
  await del(['./dist']);
});

// Build

gulp.task('css:build', async () => {
  await gulp.src(PATHs.css.src[0])
    .pipe(less()) 
    .pipe(rename('ace.css'))
    .pipe(gulp.dest(PATHs.css.build))
    .pipe(minifyCss())
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(PATHs.css.build))
    .pipe(notify({ message: 'StyleSheet files has compiled!' }));
});

gulp.task('js:build', async () => {
  await gulp.src(PATHs.js.src,{allowEmpty: true})
      .pipe(
        babel({
          presets: ['es2015']
        })
      )
      .pipe(concat('ace.js'))
      .pipe(gulp.dest(PATHs.js.build))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .on('error', function(err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
      })
      .pipe(gulp.dest(PATHs.js.build))
      .pipe(notify({ message: 'JavaScript files has compiled!' }));
});

// Server
gulp.task('server', () => {
  connect.server({
    root: './test',
    livereload: true
  });
});

gulp.task('html:dev', async () => {
  await gulp.src(PATHs.html.dev).pipe(connect.reload());
});

gulp.task('js:dev', async () => {
  await gulp.src(PATHs.js.src,{allowEmpty: true}).pipe(concat('index.js')).pipe(gulp.dest(PATHs.js.dev)).pipe(connect.reload());
});
gulp.task('js:copy', async () => {
  await gulp.src(PATHs.js.src,{allowEmpty: true}).pipe(concat('index.js')).pipe(gulp.dest(PATHs.js.dev));
});

gulp.task('less:dev', async () => {
  await gulp.src(PATHs.css.src[0]).pipe(less()).pipe(rename('style.css')).pipe(gulp.dest(PATHs.css.dev)).pipe(connect.reload());
});
gulp.task('less:copy', async () => {
  await gulp.src(PATHs.css.src[0]).pipe(less()).pipe(rename('style.css')).pipe(gulp.dest(PATHs.css.dev));
});

// Watch

gulp.task('watch', () => {
  gulp.watch(PATHs.css.src, gulp.series('less:dev'));
  gulp.watch(PATHs.js.src, gulp.series('js:dev'));
  gulp.watch(PATHs.html.dev, gulp.series('html:dev'));
});

// Task

gulp.task(
  'default',
  gulp.series(gulp.parallel('eslint', 'js:copy', 'less:copy', 'server', 'watch'))
);
gulp.task('build', gulp.series('clean', 'eslint', 'js:build', 'css:build'));

















// const jsPath = './src/index.js';
// const cssPath = './src/style/style.less';


// Clean
// gulp.task('clean', async () => {
//   await del(['./dist/']);
// });

// js:build
// gulp.task('js:build', async () => {
//   await gulp
//     .src(jsPath)
//     // .pipe(
//     //   babel({
//     //     presets: ['es2015']
//     //   })
//     // )
//     .pipe(rename('RVerify.js'))
//     .pipe(gulp.dest('./dist/'))
//     .pipe(uglify())
//     .on('error', function(err) {
//       gutil.log(gutil.colors.red('[Error]'), err.toString());
//     })
//     .pipe(rename('RVerify.min.js'))
//     .pipe(gulp.dest('./dist/'));
// });

// // css:build
// gulp.task('css:build', async () => {
//   await gulp
//     .src(cssPath)
//     .pipe(less()) 
//     .pipe(rename('RVerify.css'))
//     .pipe(gulp.dest('./dist/'))
//     .pipe(minifyCss())
//     .on('error', function(err) {
//       gutil.log(gutil.colors.red('[Error]'), err.toString());
//     })
//     .pipe(rename('RVerify.min.css'))
//     .pipe(gulp.dest('./dist/'));
// });


// Server
// gulp.task('server', () => {
//   connect.server({
//     root: './test/',
//     livereload: true
//   });
// });
// gulp.task('html:dev', async () => {
//   await gulp.src('./test/index.html').pipe(connect.reload());
// });

// gulp.task('js:dev', async () => {
//   await gulp.src('./src/index.js').pipe(gulp.dest('./test/')).pipe(connect.reload());
// });
// gulp.task('js:copy', async () => {
//   await gulp.src('./src/index.js').pipe(gulp.dest('./test/'));
// });

// gulp.task('less:dev', async () => {
//   await gulp.src('./src/style/style.less').pipe(less()).pipe(gulp.dest('./test/')).pipe(connect.reload());
// });
// gulp.task('less:copy', async () => {
//   await gulp.src('./src/style/style.less').pipe(less()).pipe(gulp.dest('./test/'));
// });

// gulp.task('watch', () => {
//   gulp.watch('./src/style/style.less', gulp.series('less:dev'));
//   gulp.watch('./src/index.js', gulp.series('js:dev'));
//   gulp.watch('./test/index.html', gulp.series('html:dev'));
// });

// gulp.task(
//   'default',
//   gulp.series(gulp.parallel('eslint', 'js:copy', 'less:copy', 'server', 'watch'))
// );
// gulp.task('build', gulp.series('clean', 'eslint', 'js:build', 'css:build'));