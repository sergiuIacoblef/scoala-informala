<?php

class Login {
    function index() {
        
        $errors = array();
        if (isset($_POST["email"])) {
            if (empty($_POST["email"])) {
                $errors["email"] = "Email is required";    
            }
            if (empty($_POST["password"])) {
                $errors["password"] = "Password is required";    
            }
            
            if (empty($errors)) {
                require "app/models/UsersModel.php";
                $usersModel = new UsersModel();
                $user = $usersModel->loginUser($_POST["email"]);
                
                if ($user === FALSE) {
                    $errors["invalid"] = "Invalid credentials";
                }
                else {
                    $_SESSION["isLogged"] = TRUE;
                    return $user;
                }
            }
        }
        else {
            $errors["invalid"] = "Request invalid"; 
        }
        
        return array("errors" => $errors);
    }
    
    function logout() {
        unset($_SESSION["isLogged"]);
        session_destroy();
         
        return array("success"=>TRUE);
    }
}


