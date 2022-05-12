<?php

require_once("server.php");
$event = $_GET["event"]; //event từ client gửi lên để biết server cần thực vấn đề gì trong tập api
switch ($event) {
    case "getALLDatahanghoa":
        $mang = array();

        $sql = mysqli_query($conn, "select mahh,tenhh,gia,giamgia from hanghoa");
        while ($rows = mysqli_fetch_array($sql)) {

            $usertemp['mahh'] = $rows['mahh'];
            $usertemp['tenhh'] = $rows['tenhh'];
            $usertemp['gia'] = $rows['gia'];
            $usertemp['giamgia'] = $rows['giamgia'];

            array_push($mang, $usertemp);
        }

        $jsonData['items'] = $mang;
        echo json_encode($jsonData);
        mysqli_close($conn);
        break;
    case "gethhPhanTrang":
        $mang = array();
        $record = $_GET['record']; //số dòng cần lấy
        $page = $_GET['page']; //số trang mà client gửi lên

        $vt = $page * $record; //tính toán lại vi trị cần lấy
        $limit = 'limit ' . $vt . ' , ' . $record;
        $search = $_GET["search"];
        $sql = mysqli_query($conn, "select mahh,tenhh,gia,giamgia from hanghoa where (mahh like '%" . $search . "%' or tenhh like '%" . $search . "%') order by mahh asc " . $limit);
        while ($rows = mysqli_fetch_array($sql)) {

            $usertemp['mahh'] = $rows['mahh'];
            $usertemp['tenhh'] = $rows['tenhh'];
            $usertemp['gia'] = $rows['gia'];
            $usertemp['giamgia'] = $rows['giamgia'];

            array_push($mang, $usertemp);
        }
        $rs = mysqli_query($conn, "select COUNT(*) as 'total' from hanghoa where (mahh like '%" . $search . "%' or  mahh like '%" . $search . "%') order by mahh asc ");
        $row = mysqli_fetch_array($rs);
        $jsonData['total'] = (int)$row['total'];
        $jsonData['totalpage'] = ceil($row['total'] / $record);
        $jsonData['page'] = (int)$page;
        $jsonData['items'] = $mang;
        echo json_encode($jsonData);
        mysqli_close($conn);
        break;
    case "deletehanghoa":
        $manganh = $_GET['mahh'];
        $sql = "delete from hanghoa WHERE mahh='" . $mahh . "'";
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
        break;
    case "inserthanghoa":
        $mahh = $_GET['mahh'];
        $tenhh = $_GET['tenhh'];
        $gia = $_GET['gia'];
        $giamgia = $_GET['giamgia'];
        $sql = "INSERT INTO `hanghoa`(`mahh`, `tenhh`,`gia`,`giamgia`) VALUES ('" . $mahh . "','" . $tenhh . "','" . $gia . "','" . $giamgia . "')";


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
        break;
    case "updatehanghoa":
        $mahh = $_GET['mahh'];
        $tenhh = $_GET['tenhh'];
        $gia = $_GET['gia'];
        $giamgia = $_GET['giamgia'];
        $sql = "update `hanghoa` set tenhh='" . $tenhh . "', gia='" . $gia . "',mahh='" . $mahh . "',giamgia='" . $giamgia . "' where manganh='" . $manganh . "'";


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
        break;
    default:
        break;
}
