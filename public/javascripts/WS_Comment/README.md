## 介绍

WS_Comment是该项目中第一个组件（可能有很多的不足之处），但是会努力优化。

## 使用说明

在你所需要使用该评论的地方，依次插入一下代码

````html
    <script type="text/javascript" src="ejs_production.js"></script>
    <script type="text/javascript" src="WS_Comment.js"></script>
    <script>
        new WS_Comment("","");
    </script>
````

`new WS_Comment("","")`:

* 参数1：文章id
* 参数2：DOM父节点，如果没空字符串，则把评论加到`body`的最后
