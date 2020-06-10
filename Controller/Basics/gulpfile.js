// Taskrunner Gulp
const gulp = require('gulp');

// Gulp plugins
const angularFilesort = require('gulp-angular-filesort');
const concat = require('gulp-concat');
const inject = require('gulp-inject');

// Vendor libraries (NPM deps)
const vendorLibs = [
  { file: 'jquery.js', path: 'jquery/dist/' },
  { file: 'angular.js', path: 'angular/' },
];

function copyLibs() {
  return gulp.src(vendorLibs.map(elt => 'node_modules/' + elt.path + elt.file))
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('dist/js'));
}

function copyApp() {
  return gulp.src(['./src/js/**/*.js'])
    .pipe(angularFilesort())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
}

function copyStyles() {
  return gulp.src(['./src/css/**/*.css'])
    .pipe(gulp.dest('dist/css'));
}

function injectScripts() {
  const scripts = gulp.src(['dist/js/vendors.js', 'dist/js/main.js']);
  return gulp.src('src/index.html')
    .pipe(inject(scripts, { ignorePath: 'dist', addRootSlash: false}))
    .pipe(gulp.dest('dist'));
}

const buildDist = gulp.series(copyLibs, copyApp, copyStyles, injectScripts);

function watchSources() {
  return gulp.watch(['src/**/*'], buildDist);
}

function serveDist(done) {
  const browserSync = require('browser-sync');

  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    watch: true
  });
  done();

}

module.exports.build = buildDist;
module.exports.default = gulp.series(buildDist, serveDist, watchSources);
