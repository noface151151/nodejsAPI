var express = require('express');
var setting = require('../setting')
var product = require("../controller/product")
var bodyParse = require('body-parser')

var app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

// start api for product
app.get('/api/product', function (req, res) {
    product.getlist(req, res);
})
app.get('/api/product/:id', function (req, res) {
    product.get(req, res, req.param('id'))
})
app.get('/api/product/byCate/:id', function (req, res) {

    product.getByCate(req, res, req.param('id'))
})
app.get('/api/product/bySubCate/:id', function (req, res) {
    product.getBySubCate(req, res, req.param('id'))
})
app.post('/api/product', function (req, res) {
    var data = req.body
    product.add(req, res, data);
})

//end api for product


app.use(express.static('./public' ))

//route angular
app.get('/', function (req, res, next) {
    res.sendFile('index.html', {
        root: './public'
    });
});

app.get('/productDetail/:id', function (req, res, next) {
    res.sendFile('index.html', {
        root: './public'
    });
});

app.listen(setting.webPort, function () {
    console.log('Server is running.. on Port' + setting.webPort);
});