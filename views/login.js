$(window).ready(function(){
   $(".login-btn").on("click", function(){
       
   
     
    var users = new Users();
    var email = $("[name='email-value']").val();
    var password = $("[name='password']").val();
    var usersDef = users.login(email, password);
    usersDef.done(listUser);
   });
    function listUser(){
        window.location.href = "https://sergiu-sergiu87.c9users.io/curs27blogStart/pages/articles.html";
    }
});