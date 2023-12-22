<!DOCTYPE html>
<html>
<body>
    <?php
    
        $user = 'root';
        $pass = '';

        $conn = new mysqli('localhost', $user, $pass);

        if($conn->connect_error)
        {
            die('Connection failed'. $conn->connect_error);
        }

        echo 'Finally connected!';

        $sql = "CREATE DATABASE myDB";

        if($conn->query($sql) === True)
        {
            echo 'DataBase Created Successfully! :D';
        }
        else
        {
            echo 'Error :(' . $conn->error;
        }

        $conn->close();

    ?>
</body>
</html>