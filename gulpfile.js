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
      srcDark: [
        './src/index.less',
        './src/**/common.less',
        './src/**/dark.less',
        './src/**/extra.less'
      ],
      srcGrayDark: [
        './src/index.less',
        './src/**/common.less',
        './src/**/gray-dark.less',
        './src/**/extra.less'
      ],
      srcMediumGray: [
        './src/index.less',
        './src/**/common.less',
        './src/**/medium-gray.less',
        './src/**/extra.less'
      ],
      srcLight: [
        './src/index.less',
        './src/**/common.less',
        './src/**/light.less',
        './src/**/extra.less'
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
  await gulp.src(PATHs.css.srcDark)
    .pipe(less()) 
    .pipe(concat('ace.dark.css'))
    .pipe(gulp.dest(PATHs.css.build))
    .pipe(minifyCss())
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(PATHs.css.build))
    .pipe(notify({ message: 'Dark CSS files has compiled!' }));

  await gulp.src(PATHs.css.srcGrayDark)
    .pipe(less()) 
    .pipe(concat('ace.gray.dark.css'))
    .pipe(gulp.dest(PATHs.css.build))
    .pipe(minifyCss())
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(PATHs.css.build))
    .pipe(notify({ message: 'GrayDark CSS files has compiled!' }));
  
  await gulp.src(PATHs.css.srcMediumGray)
    .pipe(less()) 
    .pipe(concat('ace.medium.gray.css'))
    .pipe(gulp.dest(PATHs.css.build))
    .pipe(minifyCss())
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(PATHs.css.build))
    .pipe(notify({ message: 'MediumGray CSS files has compiled!' }));

  await gulp.src(PATHs.css.srcLight)
    .pipe(less()) 
    .pipe(concat('ace.light.css'))
    .pipe(gulp.dest(PATHs.css.build))
    .pipe(minifyCss())
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(PATHs.css.build))
    .pipe(notify({ message: 'Light CSS files has compiled!' }));


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
  await gulp.src(PATHs.css.srcDark).pipe(less()).pipe(concat('ace.dark.css')).pipe(gulp.dest(PATHs.css.dev)).pipe(connect.reload());
  await gulp.src(PATHs.css.srcGrayDark).pipe(less()).pipe(concat('ace.gray.dark.css')).pipe(gulp.dest(PATHs.css.dev)).pipe(connect.reload());
  await gulp.src(PATHs.css.srcMediumGray).pipe(less()).pipe(concat('ace.medium.gray.css')).pipe(gulp.dest(PATHs.css.dev)).pipe(connect.reload());
  await gulp.src(PATHs.css.srcLight).pipe(less()).pipe(concat('ace.light.css')).pipe(gulp.dest(PATHs.css.dev)).pipe(connect.reload());

});
gulp.task('less:copy', async () => {
  await gulp.src(PATHs.css.srcDark).pipe(less()).pipe(concat('ace.dark.css')).pipe(gulp.dest(PATHs.css.dev));
  await gulp.src(PATHs.css.srcGrayDark).pipe(less()).pipe(concat('ace.gray.dark.css')).pipe(gulp.dest(PATHs.css.dev));
  await gulp.src(PATHs.css.srcMediumGray).pipe(less()).pipe(concat('ace.medium.gray.css')).pipe(gulp.dest(PATHs.css.dev));
  await gulp.src(PATHs.css.srcLight).pipe(less()).pipe(concat('ace.light.css')).pipe(gulp.dest(PATHs.css.dev));
});

// Watch

gulp.task('watch',async  () => {
  await gulp.watch(PATHs.css.srcDark, gulp.series('less:dev'));
  await gulp.watch(PATHs.js.src, gulp.series('js:dev'));
  await gulp.watch(PATHs.html.dev, gulp.series('html:dev'));
});

// Task

gulp.task(
  'default',
  gulp.series(gulp.parallel('eslint', 'js:copy', 'less:copy', 'server', 'watch'))
);
gulp.task('build', gulp.series('clean', 'eslint', 'js:build', 'css:build'));