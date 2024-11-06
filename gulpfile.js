import { src, dest, watch } from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';

const compileSass = gulpSass(sass);

export function css(done) {
    src('src/scss/app.scss')
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(dest('build/css'));

    done();
}

export function dev() {
    watch('src/scss/**/*.scss', css);
}
