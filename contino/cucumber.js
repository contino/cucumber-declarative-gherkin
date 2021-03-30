let common = [
    '--require features/tests.setup.js',
    '--require features/**/*.ts',
  ].join(' ');
  
  module.exports = {
    default: common,
  };