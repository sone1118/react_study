<?php
    $conn = mysqli_connect("localhost", "root", 111800);
    mysqli_select_db($conn, "class");
    $sql = "INSERT INTO `location` (name, distance) VALUES ('".$_POST['name']."', ".$_POST['distance'].");"; 
    $result = mysqli_query($conn, $sql);
    //redirection 되돌아가기
    header("Location: http://localhost/php/index.php");
?>