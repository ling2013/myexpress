/**
 * Created by ling on 2017/6/12.
 */
var proxy=require('http-proxy').createProxyServer({});
proxy.on(function(err,req,res){
    res.writeHead(500,{
               'Content-Type':'text/plain'
    });
});
module.exports = proxy;