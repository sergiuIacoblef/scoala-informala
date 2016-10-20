<?php

require_once "db.php";
class UsersModel extends DB {
    function loginUser($email) {
        
        $params = [':email' => $email];

        $sql = 'SELECT * FROM users WHERE email = :email';
        $sth = $this->dbh->prepare($sql);
        $sth->execute($params);
       
        return $sth->fetch(PDO::FETCH_ASSOC);
    }
}