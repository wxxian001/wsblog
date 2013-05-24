/**
 * User: 邬灿灿
 * Date: 13-5-24
 * Time: 下午1:17
 */

var db = require("../db/WS_MongoDB.js").WS_MongoDB();

var WS_ArticleModel = function(){

}

WS_ArticleModel.prototype.get = function(condition,callback){
    db.collection('user', function(err, collection) {
        collection.find().toArray(callback);
    });
}

WS_ArticleModel.prototype.post = function(data,callback){
    db.collection('user',function(err,collection){
        collection.insert(data,callback);
    })
}

module.exports = WS_ArticleModel;