<?php

    $dbname = "";
    $user = "";
    $password = "";
    $dbhost = "";

    try { 
        $pdo = new PDO("mysql:host=$dbhost;dbname=$dbname", $user, $password, array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ));
    }
    catch(PDOException $e) {
        die("Keine Verbindung zur Datenbank");
    };
    
