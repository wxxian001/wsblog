/**
* Created with JetBrains WebStorm.
* User: Wcc
* Date: 13-10-13
* Time: 下午6:55
* wsblog的评论功能
*/
/// <reference path="ejs_production.ts"/>
var WS_Comment = (function () {
    function WS_Comment(articleId, parentElId) {
        this.commentHistoryTemplateStr = [
            "       <div class=\"comment-history clearfix\">",
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
        this.articleId = articleId;
        this.parentElId = parentElId;

        this.path = this.getPath();
        this.historyData = {
            path: this.path,
            commentsHistory: [
                {
                    img: this.path + "img/user.png",
                    name: "铺子人",
                    time: "4 months ago",
                    msg: "<p> webkit-box-shadow: 0 0 0 3px #ff5f3e;</br>-moz-box-shadow: 0 0 0 3px #ff5f3e;</br>box-shadow: 0 0 0 3px #ff5f3e;</br>background-color: #fff;</br>filter:progid:DXImageTransform.Microsoft.Shadow(color='#ff5f3e', Direction=0, Strength=3);</br></br>为什么我使用后ie7下无反映呢</br></p>"
                },
                {
                    img: this.path + "img/user.png",
                    name: "铺x",
                    time: "4 天",
                    msg: "<p> webkit-box-shado天中w: 0 0 0 3px #ff5f3e;</br>-moz-box-shadow: 0 0 0 3px #ff5f3e;</br>box-shadow: 0 0 0 3px #ff5f3e;</br>background-color: #fff;</br>filter:progid:DXImageTransform.Microsoft.Shadow(color='#ff5f3e', Direction=0, Strength=3);</br></br>为什么我使用后ie7下无反映呢</br></p>"
                }
            ]
        };

        //初始化评论数据
        this.initData();

        this.commentRelyInputText = document.getElementById("comment-reply-input-text");
        this.commentRelyInputUserName = document.getElementById("comment-reply-input-username");
        this.commentRelyInputMail = document.getElementById("comment-reply-input-mail");

        this.commentRelyError = document.getElementById("comment-rely-error");

        this.commentRelyErrorMsg = [
            {
                code: 0,
                msg: '通过验证'
            },
            {
                code: 1,
                msg: '评论不能为空'
            },
            {
                code: 2,
                msg: '请输入姓名'
            },
            {
                code: 3,
                msg: '请输入邮箱'
            }
        ];

        //初始化回复评论的操作设置
        this.initReplyComment();
    }
    /**
    * 一开始进入的时候获取当前的文件路径
    * //my97版本为 4.8 Beta4 build 20131010的有一些问题，如果有一样名字的话，会取第一个的数据
    */
    WS_Comment.prototype.getPath = function () {
        var scriptEls = document.getElementsByTagName("script");
        var path = "";
        if (scriptEls.length > 0) {
            var src = scriptEls[scriptEls.length - 1].src;
            path = src.substr(0, src.indexOf("WS_Comment.js"));
        }
        return path;
    };

    WS_Comment.prototype.initData = function () {
        var html = new EJS({ url: this.path + 'WS_Comment.ejs' }).render(this.historyData, undefined);

        if (this.parentElId != "") {
            var parent = document.getElementById(this.parentElId);
            parent.innerHTML += html;
        } else {
            var flag = document.createDocumentFragment();
            var div = document.createElement('div');
            div.innerHTML += html;
            flag.appendChild(div);
            document.body.appendChild(flag);
        }
    };

    WS_Comment.prototype.initHistoryComments = function () {
        //先获取历史评论的数
        var flag;
        flag = document.createDocumentFragment();
        //再初始化历史评论的DOM
    };

    /**
    * 初始化回复评论的操作设置
    */
    WS_Comment.prototype.initReplyComment = function () {
        var jsonArray = [
            {
                el: this.commentRelyInputText,
                placeholder: "<span>请留言...</span>"
            }
        ];

        //设置评论框的占位符
        this.setPlaceholder(jsonArray);

        var me = this;
        var close = this.commentRelyError.getElementsByClassName("close")[0];
        close.addEventListener("click", function () {
            me.commentRelyError.className = me.commentRelyError.className.replace("disappear", "") + " disappear";
            return false;
        }, false);

        var submit = document.getElementById("comment-reply-submit");
        submit.addEventListener('click', function () {
            if (me.validateRely()) {
                var commentsHistory = document.getElementById("comments-history");
                var data = {
                    jsonObject: {
                        img: me.path + 'img/user.png',
                        name: me.commentRelyInputUserName["value"],
                        time: new Date(),
                        msg: me.commentRelyInputText.innerHTML
                    }
                };
                var commentHistoryTemplateEl = new EJS({ text: me.commentHistoryTemplateStr }).render(data, undefined);
                commentsHistory.innerHTML = commentHistoryTemplateEl + commentsHistory.innerHTML;
            }
            ;
        }, false);
    };

    /**
    * 验证回复信息，
    */
    WS_Comment.prototype.validateRely = function () {
        var commentRelyInputText = this.commentRelyInputText;
        var jsonObject, me = this, flag = false;
        if (this.isEmptyOfRely(commentRelyInputText, "<span>请留言...</span>")) {
            jsonObject = this.commentRelyErrorMsg[1];
        } else if (this.commentRelyInputUserName["value"] == "") {
            jsonObject = this.commentRelyErrorMsg[2];
        } else if (this.commentRelyInputMail["value"] == "") {
            jsonObject = this.commentRelyErrorMsg[3];
        } else {
            jsonObject = this.commentRelyErrorMsg[0];
            setTimeout(function () {
                me.commentRelyError.className = me.commentRelyError.className.replace("disappear", "") + " disappear";
            }, 500);
            flag = true;
        }

        this.commentRelyError.className = this.commentRelyError.className.replace("disappear", "");
        var span = this.commentRelyError.getElementsByTagName("span")[0];
        span.innerHTML = jsonObject["msg"];
        return flag;
    };

    WS_Comment.prototype.isEmptyOfRely = function (el, placeholder) {
        var innerHTML = el.innerHTML.replace(/ |\n/g, "");
        if (innerHTML == placeholder) {
            return true;
        } else {
            return false;
        }
    };

    /**
    *
    * @param array 是一个数组,
    * 如[{
    *  el:element1,
    *  placeholder:'<span>请留言...</span>'
    *  }]
    */
    WS_Comment.prototype.setPlaceholder = function (array) {
        var me = this;
        for (var i = 0; i < array.length; i++) {
            var jsonObject = array[i];
            var el = jsonObject["el"];
            var placeholder = jsonObject["placeholder"];

            /**
            * 因为存在作用域链，所以使用立即函数传参数的形式来区分变量
            */
            el.addEventListener("focus", (function (el, placeholder) {
                return function () {
                    if (me.isEmptyOfRely(el, placeholder)) {
                        el.innerHTML = "<p>&nbsp&nbsp</p>";
                        el.focus();
                    }
                };
            })(el, placeholder), false);

            /**
            * 因为存在作用域链，所以使用立即函数传参数的形式来区分变量
            */
            el.addEventListener("blur", (function (el, placeholder) {
                return function () {
                    var innerText = el.innerText;
                    if (innerText.trim() == "") {
                        el.innerHTML = placeholder;
                    }
                };
            })(el, placeholder), false);
        }
    };

    WS_Comment.prototype.replyComment = function (commentId) {
    };

    WS_Comment.prototype.cancelReplyComment = function () {
    };
    return WS_Comment;
})();

new WS_Comment("", "main-inner");
//# sourceMappingURL=WS_Comment.js.map
