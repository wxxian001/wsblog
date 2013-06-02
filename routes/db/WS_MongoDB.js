/**
 * User: 邬灿灿
 * Date: 13-5-23
 * Time: 下午9:21
 */

exports.WS_MongoDB = function(ip,port){
    //ip = ip||"localhost";
    //port = port||27017;
    console.log('starting mongodb');
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
            //改变WS_MongoDB的函数指向，类似单例工厂
            exports.WS_MongoDB = function(){
                return db;
            }
        }
    });

    console.log('started mongodb');
    return db;
}
