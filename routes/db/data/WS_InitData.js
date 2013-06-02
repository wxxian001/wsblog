/**
 * User: 邬灿灿
 * Date: 13-5-27
 * Time: 上午10:56
 */

var db = require("../WS_MongoDB.js").WS_MongoDB();

var tables = [
    {tableName:"index",tableValue:{
        'title': 'WSBLOG',
        'navlinks':['首页','文章','资源','书籍','关于我们'],
        'asidename':['博客标签','最热博文','最新博文'],
        'more':'更多',
        'taglist':[
            {content:'CSS3',classname:'tag1'},
            {content:'less',classname:'tag2'},
            {content:'Jquery',classname:'tag1'},
            {content:'Ejs',classname:'tag3'},
            {content:'ie6 hack',classname:'tag2'},
            {content:'HTML',classname:'tag1'},
            {content:'layout',classname:'tag3'},
            {content:'JAVA',classname:'tag2'},
            {content:'兼容性',classname:'tag1'}
        ],
        'hotarticlelist':[
            {articletitle:'CSS3的文字阴影—text-shadow',articlenum:'(3751)'},
            {articletitle:'前端开发常用API-chm版',articlenum:'(25993)'},
            {articletitle:'Metro用户界面实现与资源',articlenum:'(10)'},
            {articletitle:'Flexbox制作CSS布局易如反掌',articlenum:'(680)'}
        ],
        'newarticlelist':[
            {articletitle:'CSS3的文字阴影—text-shadow',articlenum:'(3751)'},
            {articletitle:'Booting to the Web Wiki',articlenum:'(25993)'},
            {articletitle:'Metro用户界面实现与资源',articlenum:'(10)'},
            {articletitle:'html ie6 兼容性 hack',articlenum:'(680)'},
            {articletitle:'触发hayout的几种常见方法介绍',articlenum:'(5971)'}
        ],
        articleviews:[
            {
                articlehead:'sassCore——设计更好的sass库',
                articlecontent:'但是使用之后会发现compass设计太复杂了，而bourbon有点太简单了。于是只好琢磨着去搞一个使用起来更方便合理的sass库，经过翻阅众多资料、实践及思考，终于有了现在的',
                articletag:'css3',articleauthor:'作者：joe',articledate:'日期：2013-05-25',articleclicknum:'阅读：35'},
            {
                articlehead:'SAE-Python教程(一) 在SAE上进行Python的开发',
                articlecontent:'这是Larry Wall（Perl的创始人）在2007年写的一篇文章，大致是在告诉大家“不要编程了，写脚本吧”云云。这篇文章被认为是Larry Wall对脚本语言，或者解释型语言的一次横向审视',
                articletag:'css3',articleauthor:'作者：queenie',articledate:'日期：2012-11-25',articleclicknum:'阅读：100'},

            {
                articlehead:'Booting to the Web - 翻译 MoziliaWiki',
                articlecontent:'Booting to the Web Home >> Booting to the Web  Mozilia相信，Web可以取代专有的、单一供应商链的程序开发。为了使开放式网络技术成为未来移动端和桌面端之类的平台上一个更好的基准，我们需要突破Web的限制去包含（在某些方面甚至超越）一些特性上仍有争议的功能。',
                articletag:'css3',articleauthor:'作者：queenie',articledate:'日期：2013-01-10',articleclicknum:'阅读：9'}
        ]
    }}/*,
    {tableName:"hotarticlelist",tableValue:[
        {articletitle:'CSS3的文字阴影—text-shadow',articlenum:'(3751)'},
        {articletitle:'前端开发常用API-chm版',articlenum:'(25993)'},
        {articletitle:'Metro用户界面实现与资源',articlenum:'(10)'},
        {articletitle:'Flexbox制作CSS布局易如反掌',articlenum:'(680)'}
    ]},
    {tableName:"newarticlelist",tableValue:[
        {articletitle:'CSS3的文字阴影—text-shadow',articlenum:'(3751)'},
        {articletitle:'Booting to the Web Wiki',articlenum:'(25993)'},
        {articletitle:'Metro用户界面实现与资源',articlenum:'(10)'},
        {articletitle:'html ie6 兼容性 hack',articlenum:'(680)'},
        {articletitle:'触发hayout的几种常见方法介绍',articlenum:'(5971)'}
    ]},
    {tableName:"articleviews",tableValue:[
        {
            articlehead:'sassCore——设计更好的sass库',
            articlecontent:'但是使用之后会发现compass设计太复杂了，而bourbon有点太简单了。于是只好琢磨着去搞一个使用起来更方便合理的sass库，经过翻阅众多资料、实践及思考，终于有了现在的',
            articletag:'css3',articleauthor:[new DBRef('authors',"001")],articledate:'日期：2013-05-25',articleclicknum:'阅读：35'},
        {
            articlehead:'SAE-Python教程(一) 在SAE上进行Python的开发',
            articlecontent:'这是Larry Wall（Perl的创始人）在2007年写的一篇文章，大致是在告诉大家“不要编程了，写脚本吧”云云。这篇文章被认为是Larry Wall对脚本语言，或者解释型语言的一次横向审视',
            articletag:'css3',articleauthor:[new DBRef('authors',"001")],articledate:'日期：2012-11-25',articleclicknum:'阅读：100'},

        {
            articlehead:'Booting to the Web - 翻译 MoziliaWiki',
            articlecontent:'Booting to the Web Home >> Booting to the Web  Mozilia相信，Web可以取代专有的、单一供应商链的程序开发。为了使开放式网络技术成为未来移动端和桌面端之类的平台上一个更好的基准，我们需要突破Web的限制去包含（在某些方面甚至超越）一些特性上仍有争议的功能。',
            articletag:'css3',articleauthor:[new DBRef('authors',"002")],articledate:'日期：2013-01-10',articleclicknum:'阅读：9'}
    ]},
    {tableName:"user",tableValue:[
        {_id:"001",userName:"joe",age:25,sex:"man"},
        {_id:"002",userName:"joe",age:25,sex:"queenie"}
    ]}*/
];

var index = -1;

function recursionCreationCollection(tableName,callback){
    index ++ ;
    db.createCollection("aa",function(err,collection){
        if(err){
            return "recursionCreateCollection is error:"+err;
        }else{
            if(count < tables.length){
                arguments.callee(tables[index],callback);
            }
            else{
                return "create collection successed!";
            }
        }
    })
}
if(typeof express ==="undefined"){
    express={};
}
express.initTable=function(){
    db.collection(tables[0].tableName,function(err,collection){
        if(!err){
            collection.insert(tables[0].tableValue,function(err,collection){
                if(err){
                    return "err:"+err;
                }else{

                }
            })
        }
    })
}

express.initTable();
