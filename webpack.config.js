const webpack = require('webpack')

module.exports = {
  // Your other webpack configuration options here

  plugins: [
    // Provide jQuery as a global variable
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
}
