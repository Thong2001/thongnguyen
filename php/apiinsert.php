<?php
require_once("server.php"); //copy code server.php vào file apiinsert -$conn
//nhận thông tin từ client gửi lên
$mahh = $_GET['mahh'];
$tenhh = $_GET['tenhh'];
$gia = $_GET['gia'];
$giamgia = $_GET['giamgia'];
$urlhinhanh = $_GET['urlhinhanh'];

$sql = "INSERT INTO hanghoa(`mahh`, `tenhh`,`gia`,`giamgia`,`urlhinhanh`) VALUES ('".$mahh."','".$tenhh."','" .$gia."','".$giamgia."','".$urlhinhanh."')";


if (mysqli_query($conn, $sql)) {  //thực thi câu truy vấn
    if (mysqli_affected_rows($conn) > 0) { //đảm bảo dữ liệu có thay đổi

        $res["success"] = 1; // {"success":1} //trả về client đối tượng json 
    } else {
        $res["success"] = 0; //{"success":0}//trả về client đối tượng json 
    }
} else {
    $res["success"] = 0; // {"success":0}//trả về client đối tượng json 
}

echo json_encode($res);
mysqli_close($conn);
?>
