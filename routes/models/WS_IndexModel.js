/**
 * User: 邬灿灿
 * Date: 13-5-27
 * Time: 下午1:38
 */

var db = require("../db/WS_MongoDB.js").WS_MongoDB();

var WS_IndexModel = function(){

}

WS_IndexModel.prototype.get = function(condition,callback){
    db.collection('index', function(err, collection) {
        collection.findOne(callback);
    });
    var i=0;
    var j =0;
}

module.exports = WS_IndexModel;