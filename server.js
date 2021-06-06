var express = require('express');
var serveStatic = require('serve-static');
var { createProxyMiddleware } = require('http-proxy-middleware');
// var path = require('path');
var port = process.env.PORT || 5000;

app = express();
app.use(serveStatic(__dirname + "/dist/"));

app.use('/api', createProxyMiddleware({ target: 'https://data.epa.gov.tw/', changeOrigin: true }));

app.listen(port);

console.log('server started at '+ 'http://localhost:' +port);