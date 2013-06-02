window.onpopstate = function (evnet){
    if(event.state){
        $('.main-inner').html(event.state.content);

        indexArticleClick();
    }
};
$(function(){
    var content = $('.main-inner').html();
    history.replaceState({index:'index',content:content},'index');

    indexArticleClick();
});

function indexArticleClick(){
    $('.articlehead a').click(function(){
        var articleId = $(this).attr('id');
        var request = $.ajax({
            url:'detailAjax',
            type:'get',
            data:{id : articleId},
            dataType:'json'
        });
        request.done(function(msg){
            $('.main-inner').html(msg.articileConent);
            msg.index = 'detail';
            msg.content = msg.articileConent;
            history.pushState(msg,'detail','detail.html');
        });
        // var stateObj = {foo:'bar'};
    });
}

