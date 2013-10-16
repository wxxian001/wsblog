/**
* Created with JetBrains WebStorm.
* User: Administrator
* Date: 13-10-14
* Time: 下午4:41
* 渲染模板到页面上
*/
/// <reference path="ejs_production.ts"/>
var data = {
    commentsHistory: [
        {
            img: "img/user.png",
            name: "铺子人",
            time: "4 months ago",
            msg: "<p> webkit-box-shadow: 0 0 0 3px #ff5f3e;</br>-moz-box-shadow: 0 0 0 3px #ff5f3e;</br>box-shadow: 0 0 0 3px #ff5f3e;</br>background-color: #fff;</br>filter:progid:DXImageTransform.Microsoft.Shadow(color='#ff5f3e', Direction=0, Strength=3);</br></br>为什么我使用后ie7下无反映呢</br></p>"
        },
        {
            img: "img/user.png",
            name: "铺x",
            time: "4 天",
            msg: "<p> webkit-box-shado天中w: 0 0 0 3px #ff5f3e;</br>-moz-box-shadow: 0 0 0 3px #ff5f3e;</br>box-shadow: 0 0 0 3px #ff5f3e;</br>background-color: #fff;</br>filter:progid:DXImageTransform.Microsoft.Shadow(color='#ff5f3e', Direction=0, Strength=3);</br></br>为什么我使用后ie7下无反映呢</br></p>"
        }
    ]
};

var commentHistoryTemplateStr = [
    "        <div class=\"comment-history clearfix\">",
    "            <div class=\"comment-history-user\">",
    "                <img src=\"<%= jsonObject.img%>\">",
    "            </div>",
    "            <div class=\"comment-history-info\">",
    "                <div class=\"comment-history-head\">",
    "                    <span class=\"comment-history-head-user\"><%= jsonObject.name%></span>",
    "                    <span class=\"comment-history-head-dot\">• </span>",
    "                    <a class=\"comment-history-head-time\" href=\"###\"><%= jsonObject.time%></a>",
    "                </div>",
    "                <div class=\"comment-history-msg\">",
    "                    <%= jsonObject.msg%>",
    "                </div>",
    "            </div>",
    "        </div>"
].join("");

var commentHistoryTemplateData = {
    jsonObject: {
        img: 'img/user.png',
        name: "邬灿灿",
        time: "一小时之前",
        msg: "<p>测试一下该功能</br>测试</br>测试一下吧</p>"
    }
};

var html = new EJS({ url: 'WS_Comment.ejs' }).render(data, undefined);
var flag = document.createDocumentFragment();
var div = document.createElement('div');
div.innerHTML = html;

flag.appendChild(div);
document.body.appendChild(flag);
//# sourceMappingURL=renderTemplate.js.map
