<?php

// echo "<pre>";
// print_r($_SERVER);

// START SESSION FOR APP
session_start();

// Include helpers functions
require "app/helpers/functions.php";

// APP routes (URI)
$routes["/articles"] = array("controller" => "Articles",
                                "method" => "index");
$routes["/articles/add"] = array("controller" => "Articles",
                                "method" => "addArticle");
$routes["/articles/delete"] = array("controller" => "Articles",
                                "method" => "deleteArticle");
$routes["/articles/update"] = array("controller" => "Articles",
                                "method" => "updateArticle");
$routes["/articles/get"] = array("controller" => "Articles",
                                "method" => "getArticle");
            
$routes["/comments"] = array("controller" => "Comments",
                                "method" => "index");                                
$routes["/comments/add"] = array("controller" => "Comments",
                                "method" => "addComment");
                                
                                
                                
$routes["/login"] = array("controller" => "Login",
                            "method" => "index");
$routes["/logout"] = array("controller" => "Login",
                            "method" => "logout");
                            

if (isset($_SERVER["PATH_INFO"])) {
    $key = rtrim($_SERVER['PATH_INFO'], '/');
    //$key = $_SERVER["PATH_INFO"];
    if (array_key_exists($key, $routes)) {
        require "app/controllers/" . $routes[$key]["controller"] . ".php"; 
        $controller = new $routes[$key]["controller"]();
        $response = $controller->$routes[$key]["method"]();
   
        // Print response for XHR|AJAX JS
        api_response($response, http_response_code());
    }
    else {
        api_response(array("error"=>"Page not found"), 404);
    }
}
else {
    api_response(array("error"=>"Access Forbidden"), 403);
}
                                


