var express = require('express')
var https = require('https')
var http = require('http')
var app = express()

var port = process.env.PORT || 8080;

var server = app.listen(port, () => {
    console.log(`App is running on port ${port}` );
});