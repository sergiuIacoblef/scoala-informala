$(window).ready(function(){
    var articlesContainer = $(".js-articles");
    var articles = new Articles();
    
    var articlesDef = articles.getArticles();
    articlesDef.done(listArticles);
   
    $( ".search-article" ).click( function() {
            var articlesDef = articles.search($('#search').val());
            articlesDef.done(listArticles);
    });
    
    function listArticles(){
        articlesContainer.html('');
        var articleModels = articles.models;
        for (var i=0; i<articleModels.length; i++){
            var articleHtml = "<li data-article-id="+articleModels[i].id+"><a href='/curs27blogStart/pages/article.html?id="+ articleModels[i].id+"'>"+articleModels[i].title+"</a>"+
                "<div>"+articleModels[i].content+"</div>"+
                "</li>";
            articlesContainer.append(articleHtml);
        }
    }
    
});