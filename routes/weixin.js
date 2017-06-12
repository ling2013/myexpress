/**
 * Created by ling on 2017/6/12.
 */
var express = require('express');
var router = express.Router();
var wechat = require('wechat');
var config = {
    token: 'zxl123456',
    appid: 'wx75e6db122f49146f',
    encodingAESKey: '4U86ZUqXzjYNcaXELy7uRRil9eiDh4PeD4opEOhVyP3',
    checkSignature: false // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};
/* GET users listing. */
//router.get('/', function(req, res, next) {
//    res.send('respond with a resource');
//});

router.get('/', wechat(config, function (req, res, next) {
    console.log(req);
    console.log(res);
}));

module.exports = router;

//var express = require('express');
//var router = express.Router();
//
///* GET users listing. */
//router.get('/', function(req, res, next) {
//    res.send('respond with a resource');
//});
//
//module.exports = router;
