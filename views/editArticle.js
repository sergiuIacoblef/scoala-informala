$(window).ready(function(){
    function checkSession(){
        $.ajax({
            url:"https://sergiu-sergiu87.c9users.io/curs22-23-24/session",
            type:"GET",
            success:function(resp) {
               // resp = JSON.parse(resp);
                if (resp.logged ===  false){
                   window.location.href = "https://sergiu-sergiu87.c9users.io/curs27blogStart"
                } else {
                    $('#user').text(resp.user.email);
                    console.log("user is admin");
                }
            }
        })
    }
    
    checkSession();
    var articleContainer = $(".js-article");
    var articles = new Articles();
    var id = location.search.split('id=')[1]
    var articleDef = articles.getArticle(id);
    articleDef.done(populateArticle);
    
    function populateArticle(){
        var articleModel = articles.model;
        $("[name='title']").val(articleModel.title);
        $("[name='content']").val(articleModel.content);
       // $("[name='images']").val(articleModel.images);
        
    }
    
    $("[type='submit']").on("click",function(ev){
        ev.preventDefault();
        //var 1. Send form object to the FormData
        // constructor. Key/Value pairs are automatically
        // generated from the form element
        
        // var form = $("#article-form")[0];
        // var formData = new FormData(form);
        
        // for(var val of formData.values()){
        //     console.log(val);
        // }
        
        // for(var key of formData.keys()){
        //     console.log(key);
        // }
        
        
        //var2. Do not sent form element to the FormData
        //constructor. We will manually append only the
        //desired key/value pairs.
        
        var formData = new FormData();
        var titleValue = $("[name='title']").val();
        var contentValue = $("[name='content']").val();
        var fileInput = $("[name='images']")[0];
        
        formData.append("title",titleValue);
         formData.append("id",id);
        formData.append("content",contentValue);
        //here we are appending to the form data, our image
        formData.append("file",fileInput.files[0]);
       
        // for(var val of formData.values()){
        //     console.log(val);
        // }
        
        // for(var key of formData.keys()){
        //     console.log(key);
        // }
        
        $.ajax({
            url:"https://sergiu-sergiu87.c9users.io/curs22-23-24/articles/update?id="+id,
            type:"POST",
            data:formData,
            processData:false,
            contentType:false,
            success:function(resp){
                window.location.href = "https://sergiu-sergiu87.c9users.io/curs27blogStart/pages/articles.html";
            },
            error:function(){
                console.log("oopsss");
            }
        });
        
    });
});