
<?php 
    require("conn_db.php");
    require("config.php");
?>
<!-- <?php 
    $conn = mysqli_connect('localhost', 'root', 111800);
    mysqli_select_db($conn, 'class');
    $result = mysqli_query($conn, 'SELECT * FROM `location`');

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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PHP practice</title>
    <link href="http://localhost/bootstrap-3.3.7-dist\bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- <link rel="stylesheet" href="http://localhost/php/index.css"> -->
</head>
<body class="container">
    <header>
    <div class="jumbotron text-center">
        <h1><a href="http://localhost/php/index.php">PHP Pratice</a></h1>
    </div>       
    </header>
    <div class="row">
        <nav class="col-md-3">
            <ul class="nav nav-pills nav-stacked">
                <?php
                    $conn = db_init($config["host"], $config["duser"], $config["dpw"], $config["dname"]);
                    $result = mysqli_query($conn, 'SELECT * FROM `location`');
                    
                    while($row = mysqli_fetch_assoc($result)) {
                        echo '<li role="presentation"><a href="http://localhost/php/index.php?id='.$row['id'].'">'.htmlspecialchars($row['name']).'</a></li>';
                                
                    }
                ?>
            </ul>
        </nav>
        <div class="col-md-9">
            <article>         
                <form action="http://localhost/php/process.php" method="post">
                    <div class="form-group">
                        <label for="form-name">지명</label>
                        <input type="text" name="name" class="form-control" id="form-name" placeholder="지명을 적어주세요"/>

                        <label for="form-distance">Password</label>
                        <input type="text" name="distance" class="form-control" id="form-distance" placeholder="거리를 적어주세요">
                    </div>                  
                    <input type="submit" name="submit" class="btn btn-default"/>
                </form>
            </article>
            <hr>
            <div id="button">
                <input type="button" value="white" class="btn btn-default" ></input>
                <input type="button" value="black" class="btn btn-default"></input>
                <a class="btn btn-default btn-success" href="http://localhost/php/white.php" role="button">쓰기</a>
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="http://localhost/bootstrap-3.3.7-dist\bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>  
</body>
</html>