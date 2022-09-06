<?php 
    require("conn_db.php");
    require("config.php");
?>
<!-- <?php 
    $conn = mysqli_connect('localhost', 'root', 111800);
    mysqli_select_db($conn, 'class');
    $result = mysqli_query($conn, 'SELECT * FROM `location`');
    
    //mysqli_fetch_assoc($result);
    //첫번째 행의 데이터를 담아서 돌려주는데
    //associate연관 배열의 형식이다.
    //연관 배열 $a = array('name' => 'Jenos', 'age' => 12);
    // echo $a["name"]; -> Jenos
    // 더이상 가져올 데이터가 없을때 row에는 NULL이 들어간다
    //var_dump($row); 정확한 타입을 알 수 있다.

    while($row = mysqli_fetch_assoc($result)) {
        echo $row["name"];
        echo ": ";
        echo $row["distance"];
        echo "<br/>";
    }
?> -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP practice</title>
    <link rel="stylesheet" href="http://localhost/php/index.css">
</head>
<body>
    <header>
        <h1><a href="http://localhost/php/index.php">PHP Pratice</a></h1>
    </header>
    <nav>
    <ul>
        <?php
             $conn = db_init($config["host"], $config["duser"], $config["dpw"], $config["dname"]);
            $result = mysqli_query($conn, 'SELECT * FROM `location`');
            
            while($row = mysqli_fetch_assoc($result)) {
                echo '<li><a href="http://localhost/php/index.php?id='.$row['id'].'">'.$row['name'].'</a></li>';
                        
            }
        ?>
    </ul>
    </nav>
    <div id="button">
        <input type="button" value="white"></input>
        <input type="button" value="black"></input>
        <a href="http://localhost/php/white.php">쓰기</a>
    </div>
    <article>
        <form action="http://localhost/php/process.php" method="post">
            <p>지명: <input type="text" name="name"/></p>
            <p>거리: <input type="text" name="distance"/></p>
            <p><input type="submit" name="submit"/></p>
        </form>  
    </article>

    
</body>
</html>