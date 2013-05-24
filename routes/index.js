
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'WSBLOG',navlinks:['首页','文章','资源','书籍','关于我们'] });
};