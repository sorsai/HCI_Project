<?php
	$username = $_POST["username"];
    // $studentid_length = strlen((string)$num);
    $passowrd = $_POST["password"];
	
	if ($username == "sorsai" && $password == "1234" ) {
		header("location: index.html");
	} else {
		header("location: LoginError.php");
	}
?>