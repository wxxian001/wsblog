/**
 * User: 邬灿灿
 * Date: 13-6-2
 * Time: 下午1:36
 */

var WS_IndexService = require("./services/WS_IndexService.js");
var indexService = new WS_IndexService();
/**
 * 获得detial的相关页面
 * @param req
 * @param res
 */
exports.get = function(req, res){
    indexService.get(function(err, collection){
        if (err) {
            res.send("err");
        } else {
            console.log(collection);
            res.render('detail.html',collection);
        }
    });
};