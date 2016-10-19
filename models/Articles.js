function Articles(){
    this.models = [];
}
Articles.prototype.getArticles = function() {
    var that= this;
    return $.ajax({
            url:"https://sergiu-sergiu87.c9users.io/curs22-23-24/articles",
            type:"GET",
            dataType:"json",
            success:function(resp){
                for(var i = 0; i<resp.length; i++){
                    var article = new Article(resp[i]);
                    that.models.push(article);
                }
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
}
Articles.prototype.delete = function(articleId){
    //Do AJAX request to URL: https://web-7-siitwebcluj.c9users.io/curs22-23-24/articles/delete?id=+articleId"
    var that= this;
    return $.ajax({
            url:"https://sergiu-sergiu87.c9users.io/curs22-23-24/articles/delete?id="+articleId,
            type:"GET",
            dataType:"json",
            success:function(resp){
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
}
Articles.prototype.add = function(articleData){
    
}
Articles.prototype.getArticle = function(articleId){
    var that= this;
    return $.ajax({
            url:"https://sergiu-sergiu87.c9users.io/curs22-23-24/articles/get?id="+articleId,
            type:"GET",
            dataType:"json",
            success:function(resp){
                var article = new Article(resp);
                that.model = article;
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
}
Articles.prototype.search = function(text){
    var that= this;
    that.models= [];
    return $.ajax({
            url:"https://sergiu-sergiu87.c9users.io/curs22-23-24/articles/search?value="+text,
            type:"GET",
            dataType:"json",
            success:function(resp){
                for(var i = 0; i<resp.length; i++){
                    var article = new Article(resp[i]);
                    that.models.push(article);
                }
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
    
}

