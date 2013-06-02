/**
 * User: 邬灿灿
 * Date: 13-5-27
 * Time: 上午10:58
 */

var db = require("../WS_MongoDB.js").WS_MongoDB();

var tables = [
    "index",
    "hotarticlelist",
    "newarticlelist",
    "articleviews",
    "user"
];

var index = -1;

function recursionCreationCollection(tableName,callback){
    index ++ ;
    db.createCollection(tableName,function(err,collection){
        if(err){
            return "recursionCreateCollection is error:"+err;
        }else{
            if(index < tables.length){
                recursionCreationCollection(tables[index],callback);
            }
            else{
                return "create collection successed!";
            }
        }
    })
}

function initTable(){
    db.collection("system.indexes",function(err,collection){
        if(!err){
            index++;
            recursionCreationCollection(tables[index],null);
        }
    })
}

initTable();