$(window).ready(function(){
       /*This needs to be added on every page that should be accesed only by admin users*/
     function checkSession(){
        $.ajax({
            url:"https://sergiu-sergiu87.c9users.io/curs22-23-24/session",
            type:"GET",
            success:function(resp) {
               // resp = JSON.parse(resp);
                if (resp.logged ===  false){
                   window.location.href = "https://sergiu-sergiu87.c9users.io/curs27blogStart/index.html"
                } else {
                    $('#user').text(resp.user.email);
                    console.log("user is admin");
                }
            }
        })
    }
    
    checkSession();
    var articlesContainer = $(".js-articles");
    var articles = new Articles();
    
    var articlesDef = articles.getArticles();
    articlesDef.done(listArticles);
   
    $( ".search-article" ).click( function() {
            var articlesDef = articles.search($('#search').val());
            articlesDef.done(listArticles);
    });
    $( "#logout" ).click( function() {
            $.ajax({
            url:"https://sergiu-sergiu87.c9users.io/curs22-23-24/logout",
            type:"GET",
            success:function(resp) {
                   window.location.href = "https://sergiu-sergiu87.c9users.io/curs27blogStart"
                
            }
        })
    });
    
    function listArticles(){
        articlesContainer.html('');
        var articleModels = articles.models;
        if (articleModels.length > 0) {
        for (var i=0; i<articleModels.length; i++){
            var articleHtml = "<li class='article-li' data-article-id="+articleModels[i].id+"><a href='/curs27blogStart/pages/article.html?id="+ articleModels[i].id+"'>"+articleModels[i].title+"</a>"+
            "<img src=../../uploads/"+articleModels[i].images+">"+
                "<div>"+articleModels[i].content+"</div>"+
                "<button class='delete-article' data-article-id="+articleModels[i].id+">Remove</button>"+
                "<a href='/curs27blogStart/pages/editArticle.html?id="+ articleModels[i].id+"'>Edit</a>"+
                "</li>";
            articlesContainer.append(articleHtml);
        }
        } else {
            articlesContainer.append('<h3> nu exista articole</h3>');
        }
        
     $( ".delete-article" ).on( "click", function() {
         var id = $(this).data( "article-id" );
         var articleDef = articles.delete(id);
    articleDef.done($(this).closest('.article-li').remove());
         
    });
    }
    
});