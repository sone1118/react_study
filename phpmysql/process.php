<?php
    require("conn.db.php");
    require("config.php");
    $conn = db_init($config["host"], $config["duser"], $config["dpw"], $config["dname"]);
    $sql = "INSERT INTO `location` (name, distance) VALUES ('".$_POST['name']."', ".$_POST['distance'].");"; 
    $result = mysqli_query($conn, $sql);
    //redirection 되돌아가기
    header("Location: http://localhost/php/index.php");
?>