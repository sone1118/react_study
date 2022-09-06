<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Check</title>
</head>
<body>
    <?php 
    //database의 보안문제
    //where 할때 OR 1=1같은 부분을 넣어주면 모든 정보를 다 털리게됨
    //아이디: 아무거나
    //비밀번호: ' OR '1'='1 
    //이렇게 하면 털림
    //따라서 공격자가 보낸 '이러한 기호를 \'이런 식으로 바꿔준다면 escape 할수 있다
    //근데 객체 지향 방식으로 하면 자동으로 이런 처리를 해주고 이것이 권장되는 방법이래.

        $conn = mysqli_connect('localhost', 'root', 111800);
        mysqli_select_db($conn, 'class');
        $user_id = mysqli_real_escape_string($conn, $_GET['user_id']);
        $user_pw = mysqli_real_escape_string($conn, $_GET['user_pw']);
        $sql = "SELECT * FROM `student` WHERE user_id='".$user_id."' AND user_pw='".$user_pw."';";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);

        if($row) {
            echo "<script> alert('Login 합니다.');</script>";
        }
        else {
            echo "<script> alert('아이디 혹은 비밀 번호가 틀렸습니다.');</script>";
        }

        header("Refresh: 0; URL=http://localhost/php/login.php");
        
    ?>
</body>
</html>