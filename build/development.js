const config = require('./config');

module.exports = {
  ...config,
  devServer: {
    contentBase: require('path').join(__dirname, 'output'),
    compress: true,
    // port: 3821,
    open: true,
  },
  mode: 'development'
}
