<?php
if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject2'] && isset($_POST['message'])) ){
	$name = $_POST['name'];
	$email = $_POST['email'];
  $subject2 = $_POST['subject'];
	$message = nl2br($_POST['message']);
	$to = "plushsgmbh@gmail.com";
	$from = $email;
	$subject = 'Kontakt Formular Nachricht';
	$message = '<br><b>Name:</b></br> '.$name.' <br><b>Email:</b></br> '.$email.' <br><b>Betreff:</b></br>'.$subject2.'<br><b>Nachricht:</b></br>'.$message;
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if(mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>
