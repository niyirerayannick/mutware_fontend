const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    // Serve the app over HTTPS locally
    https: true,
    client: {
      webSocketURL: {
        protocol: process.env.NODE_ENV === 'production' ? 'wss' : 'ws', // wss for production, ws for localhost
        hostname: process.env.NODE_ENV === 'production' ? 'mutwarekidtv.xyz' : 'localhost', // Use production domain or localhost
        port: process.env.NODE_ENV === 'production' ? 443 : 8080, // Port 443 for production, 8080 for localhost
        pathname: '/ws',
      },
    },
  },
});
