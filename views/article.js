$(window).ready(function(){
    var articleContainer = $(".js-article");
    var articles = new Articles();
    var comments = new Comments();
    var id = location.search.split('id=')[1]
    var articleDef = articles.getArticle(id);
    articleDef.done(listArticle);
    
    function listArticle(){
        var articleModel = articles.model;
                var articleHtml = "<li class='article' data-article-id="+articleModel.id+"><h3>"+articleModel.title+"</h3>"+
                "<div>"+articleModel.content+"</div>"+
                "<div class='js-article-comments'></div>"+
                
                "<input class='comment-username' type='text'></input>"+
                "<textarea class='comment-text'></textarea>"+
                "<button class=js-add-comment>Add Comment</button>"
                "</li>";
          articleContainer.append(articleHtml);
          var commentsDef = comments.getCommentsByArticleId(articleModel.id);
          commentsDef.done(listComments);
          $( ".js-add-comment" ).click( function() {
              addComment();
            });
        
    }
    function  addComment() {
        var articleData = {
            article_id : $('.article').attr("data-article-id"),
            username : $('.comment-username').val(),
            content : $('.comment-text').val()
        };
        var commentsDef = comments.add(articleData);
        $('.comment-username').val('');
        $('.comment-text').val('')
        commentsDef.done(addCommentComplete);
    }
    function addCommentComplete() {
        addCommentToList(comments.model);
    }
    function listComments(){
        var commentModels = comments.models;
         for(var i=0; i< commentModels.length; i++){
                addCommentToList(commentModels[i]);
        }
        
    }
    function addCommentToList(comment) {
        var commentsContainer = $(".js-article-comments");
        var commentHtml = "<li data-comment-id="+comment.id+">"+
                "<div>"+comment.content+"</div>"+
                "<div>"+comment.username+"</div>"+
                "</li>";
          commentsContainer.append(commentHtml);
    }
});