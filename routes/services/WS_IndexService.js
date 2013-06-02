/**
 * User: 邬灿灿
 * Date: 13-5-27
 * Time: 下午1:33
 */

var WS_IndexModel = require("../models/WS_IndexModel.js");
var indexModel = new WS_IndexModel();

var WS_IndexService = function(){

}

WS_IndexService.prototype.get = function(callback){
    return indexModel.get(null,callback);
}

module.exports = WS_IndexService;