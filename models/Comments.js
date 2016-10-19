function Comments(){
    this.models = [];
}
Comments.prototype.getArticles = function() {
    var that= this;
    return $.ajax({
            url:"https://sergiu-sergiu87.c9users.io/curs22-23-24/articles",
            type:"GET",
            dataType:"json",
            success:function(resp){
                for(var i = 0; i<resp.length; i++){
                    var comment = new Comment(resp[i]);
                    that.models.push(comment);
                }
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
}
Comments.prototype.delete = function(articleId){
    //Do AJAX request to URL: https://web-7-siitwebcluj.c9users.io/curs22-23-24/articles/delete?id=+articleId"
}
Comments.prototype.add = function(articleData){
    var that= this;
    return $.ajax({
            url:"https://sergiu-sergiu87.c9users.io/curs22-23-24/comments/add",
            type:"POST",
            data: articleData,
            dataType:"json",
            success:function(resp){
                that.model = articleData;
                that.model.id = resp.id;
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
}
Comments.prototype.getCommentsByArticleId = function(articleId){
    var that= this;
    return $.ajax({
            url:"https://sergiu-sergiu87.c9users.io/curs22-23-24/article/comments?articleId="+articleId,
            type:"GET",
            dataType:"json",
            success:function(resp){
                for(var i = 0; i<resp.length; i++){
                    var comment = new Comment(resp[i]);
                    that.models.push(comment);
                }
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
}