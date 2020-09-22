const { src, dest } = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const rollup = require('gulp-better-rollup')
const babel = require('rollup-plugin-babel')
const resolve = require('@rollup/plugin-node-resolve').nodeResolve
const cjs = require('@rollup/plugin-commonjs')

function transpile() {
  return src('./index.js')
    .pipe(sourcemaps.init())
    .pipe(rollup({
      plugins: [
        resolve(), cjs(),
        babel({
          presets: [["@babel/env", {"modules": false}]],
          babelrc: false,
          exclude: 'node_modules/**'
        })
      ]}, {
      noConflict: true,
      file: 'intlTelData.js',
      format: 'umd',
    }))
    .pipe(dest('dist/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/'))
}
transpile.description = `Build and publish all assets to universal module definition`

exports.default = transpile
