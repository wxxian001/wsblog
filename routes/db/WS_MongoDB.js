/**
 * User: 邬灿灿
 * Date: 13-5-23
 * Time: 下午9:21
 */

exports.WS_MongoDB = function(ip,port){
    //ip = ip||"localhost";
    //port = port||27017;
    var mongodb = require("mongodb");
    ip="localhost";
    port = 27017;
    var server = new mongodb.Server(ip,port,{auto_reconnect:true});
    var db = new mongodb.Db("test",server);
    db.open(function(err,db){
        if(err){
            console.log(err);
        }
        if(!err){
            console.log("we are connected!");
        }
    });
}