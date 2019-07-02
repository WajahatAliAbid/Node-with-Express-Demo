const express = require('express');
const app = express()

module.exports.init = function(callback){
    const apiRouter = require('./routes')
    app.use('/api',apiRouter)
    callback(app)
}
