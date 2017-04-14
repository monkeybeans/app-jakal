const autoprefixer = require('autoprefixer');

// console.log('Autoprefixer uses: ', autoprefixer().info());
module.exports = ctx => ({ // eslint-disable-line no-unused-vars
  plugins: [
    autoprefixer({}),
  ],
});
