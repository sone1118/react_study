<?php 
require('conn_db.php');
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
                echo '<li><a href="http://localhost/php/index.php?id='.$row['id'].'">'.htmlspecialchars($row['name']).'</a></li>';
                        
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
        <div>
            <?php 
            if(!empty($_GET["id"])) {
                $sql = 'SELECT * FROM  `location` where id='.$_GET["id"];
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);

                //escaping 

                //이렇게 내용이 <script>alert("~~~");</script>로 된 내용이라면 스크립트 공격을 받아서 원치않은 스크립트가 실행될 수 있다
                //저 내용을 정말 text느낌으로 바꿔줄 필요가 있다
                //< => &lt; 식으로
                //이것을 해주는 함수가 htmlspecialchar();
                //htmlspecialchar()을 사용해서 값을 바꿔 출력
                // echo htmlspecialchars($row['description']);   


                //하지만 html은 딱히 큰 문제가 되지 않기때문에
                //html tag는 출력해주고 script만 따로 빼주고 싶다면
                //strip_tags(string,string);
                echo strip_tags($row['description'], '<h1><p>');
            }
            ?>
            
        </div>
    </article>

    
</body>
</html>