<?php
$hostname = 'localhost';
$username = 'root';
$password = '';
$dbname = "trasua";
$port=3306;
$conn = mysqli_connect($hostname, $username, $password,$dbname,$port);

if (!$conn) {
    // die("Connection failed: " . $conn->connect_error);
  echo 'Kết nối khong thành công ';

 exit();
}
echo 'Kết nối thành công ';
mysqli_set_charset($conn,"utf8");
// mysql_set_charset('utf8', $con);

?>