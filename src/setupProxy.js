// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.timbu.cloud',
      changeOrigin: true, // needed for virtual hosted sites
      pathRewrite: {
        '^/api': '', // remove base path
      },
    })
  );
};
