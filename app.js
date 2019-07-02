const express = require('./config/express')
const port = 3000
const http = require('http');

express.init(function (app) {

    var httpServer = http.createServer(app).listen(port)
  
    httpServer.on('listening', function () {
      console.log('Express http server listening on port ' + this.address().port);
    });
  });