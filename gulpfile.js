import { src, dest, watch, series } from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';

const compileSass = gulpSass(sass);

export function js(done) {
    src('src/js/**/*.js')
        .pipe(dest('build/js'));
    done();
}

export function css(done) {
    src('src/scss/**/*.scss', { sourcemaps: true })
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(dest('build/css', { sourcemaps: '.' }));
    done();
}

export function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
}

export default series(js, css, dev);
