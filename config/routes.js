"use strict";

var express = require('express');
var router = express.Router();

var fs = require("fs");
var path = require("path");

var routerPath = path.join(__dirname, '../routes');
fs.readdirSync(routerPath)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js") && (file.slice(-3) === ".js");
    })
    .forEach(function (file) {
        //var routeName = '/' + file.slice(0,-3);
        //app.use(routeName, require(path.join(__dirname,file)));
        require(path.join(routerPath, file))(router);
    });

module.exports = router;