// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    markdown = require('gulp-markdown'),
    jade = require('gulp-jade'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr(),
    embedlr = require('gulp-embedlr');

// Styles
// gulp.task('styles', function() {
//     return gulp.src('./css/*.scss')
//         .pipe(sass({
//             style: 'expanded',
//             compass: true,
//             require: ['susy']
//         }))
//         .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//         .pipe(gulp.dest('./dist/css'))
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(minifycss())
//         .pipe(gulp.dest('./dist/css'))
//         .pipe(livereload(server))
//         .pipe(notify({ message: 'Styles task complete' }));
// });
// CSS
gulp.task('css', function() {
   return gulp.src('assets/stylesheets/*.min.css')
        .pipe(minifycss())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({ message: 'CSS task complete' }));
    });
//copy
gulp.task('copy', function() {
   return gulp.src([
            '*fonts/*',
            '*landy-icons/*',
            '*assets/js/vendor/*',
            '*.html'
        ]).pipe(gulp.dest('dist/'));
   

 });
// Converts Markdown to HTML
gulp.task('markdown', function () {
    return gulp.src('./jade/md/*.md')
        .pipe(markdown())
        .pipe(gulp.dest('./jade/md/'))
        .pipe(notify({ message: 'Markdown to HTML task complete' }));
});

// Converts Jade to HTML (jade is including markdown files)
gulp.task('jade', ['markdown'], function() {  // ['markdown'] forces jade to wait
    return gulp.src('./jade/*.jade')
        .pipe(jade({
            pretty: true,  // uncompressed
        }))
        .pipe(gulp.dest('./'))
        .pipe(livereload(server))
        .pipe(notify({ message: 'Jade to HTML task complete' }));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['assets/js/main.js', 'assets/js/fmn.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify({ message: 'JS task complete' }));
});

// Images
gulp.task('img', function() {
    return gulp.src('assets/img/**/*')
       // .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
          .pipe(gulp.dest('./dist/assets/img'));
        //.pipe(livereload(server))
        //.pipe(notify({ message: 'Images task complete' }));
});

// HTML
gulp.task('html', function() {
    gulp.src("production.html")
        .pipe(embedlr())
        .pipe(gulp.dest('./dist/'))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist/'))
        .pipe(rename('index.html'))
        .pipe(livereload(server))
        .pipe(notify({ message: 'HTML task complete' }));
})

//Compass
gulp.task('compass', function() {
     gulp.src('./assets/compass/sass/fusenepalstyles.min.scss')
   .pipe(compass({
     css: 'assets/stylesheets',
     sass: 'assets/compass/sass',
     image: 'assets/img'
   }))
   .pipe(minifycss())
   .pipe(gulp.dest('assets/stylesheets'));
});

// Default task
gulp.task('default', ['copy','css','scripts', 'html', 'img' , 'compass', 'watch']);

// Watch
gulp.task('watch', function() {

    // Listen on port 35729
    server.listen(35729, function (err) {
        if (err) {
        return console.log(err);
    }

    // Watch .scss files
    //gulp.watch('assets/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('assets/js/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('assets/img/**/*', ['img']);

    // Watch .scss files
    gulp.watch('assets/compass/sass/**/*.scss', ['compass']);

    // Watch .md files
    // gulp.watch('jade/md/*.md', ['jade']);  // triggers jade task when markdown file changes

    // Watch .jade files
    // gulp.watch('jade/**/*.jade', ['jade']);

    });

});