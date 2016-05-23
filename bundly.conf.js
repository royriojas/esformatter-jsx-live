module.exports = function () {
  var pkg = require('./package.json');

  return {
    target: {
      src: 'index.js',
      dest: 'dist/index.js',
      options: {
        revision: pkg.version
      }
    }
  }
};