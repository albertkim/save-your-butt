const webpack = require('webpack')
const express = require('express')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

const server = new WebpackDevServer(
  webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    historyApiFallback: {
      index: '/'
    }
  }
)

server.use('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(8080, 'localhost', (error, result) => {
  if (error) { console.log(error) }
  console.log('Listening at localhost:8080')
})
