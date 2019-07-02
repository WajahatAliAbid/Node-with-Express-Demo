import express from 'express';
const express = require('./config/express')
const port = 3000

express.init(function (app) {

    var httpServer = http.createServer(app).listen(port)
  
    httpServer.on('listening', function () {
      info('Express http server listening on port ' + this.address().port);
    });
  });