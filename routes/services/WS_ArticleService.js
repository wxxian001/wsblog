/**
 * User: 邬灿灿
 * Date: 13-5-24
 * Time: 下午1:17
 */

var WS_ArticleModel = require("../models/WS_ArticleModel.js");
var articleModel = new WS_ArticleModel();

var WS_ArticleService = function(){

}

WS_ArticleService.prototype.get = function(callback){
    return articleModel.get(null,callback);
}

WS_ArticleService.prototype.post = function(data,callback){
    return articleModel.post(data,callback);
}

module.exports = WS_ArticleService;