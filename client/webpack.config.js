const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
new WorkboxWebpackPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true
  })
  