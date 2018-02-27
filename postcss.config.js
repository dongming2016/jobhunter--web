var precss = require('precss');

module.exports = {
  'syntax': 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {},
    precss
  }
}
