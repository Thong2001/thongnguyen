<?php
session_start();
if( $_FILES['photo'])
{
$filename = md5(mt_rand());
$extension=str_replace('image/', '.', $_FILES['photo']['type']);
//$status = (boolean) move_uploaded_file($_FILES['photo']['tmp_name'], '../file/'.$filename.$extension);
$status = (boolean) move_uploaded_file($_FILES['photo']['tmp_name'], 'C:/wamp64/www/trasua/assets/img/'.$filename.$extension);

$response = (object) [
	'status' => $status
];

if ($status) {
	$response->url = 'localhost:8080/trasua/assets/img/'.$filename.$extension;
	$response->attach =$filename.$extension;
}

echo json_encode($response);
}
?>