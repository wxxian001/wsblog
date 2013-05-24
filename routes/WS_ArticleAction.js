/**
 * User: 邬灿灿
 * Date: 13-5-24
 * Time: 下午1:15
 */

var WS_ArticleService = require("./services/WS_ArticleService.js");
var articleService = new WS_ArticleService();

exports.get = function(req, res){
    articleService.get(function(err, items){
        if (err) {
            res.send("err");
        } else {
            console.log(items);
            res.send(items);
        }
    });
};

exports.post = function(req, res){
    var data = {
        name:"wcc",
        age:24,
        sex:true
    };
    articleService.post(data,function(err,items){
        if(err){
           res.send("err");
        }else{
            console.log(items);
            res.send(items);
        }

    })
};

exports.put = function(req, res){

};

exports.delete = function(req, res){

};
