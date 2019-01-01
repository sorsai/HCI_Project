<?php
	$username = $_POST["username"];
    // $studentid_length = strlen((string)$num);
    $password = $_POST["password"];
	
	if ($username == "sorsai" && $password == '1234' ) {
		header("location: index2.html");
	} else {
		header("location: LoginError.php");
	}
?>