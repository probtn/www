
<!-- PHP SEND EMAIL -->

<?php
$toEmail = "hello@probtn.com";

$mailHeaders = "From: ".$_POST["userName"]." <". $_POST["userEmail"] .">\r\n";

$message_content = "Subject: Contact Form Message\r\n
From: ".$_POST["userName"]." ".$_POST["userEmail"]."\r\n

Message: ".$_POST["content"]."";


if(mail($toEmail, 'Contact Form Message', $message_content, $mailHeaders)) {
	print "<p class='success'>Message Sent. Thank You!</p>";
} else {
	print "<p class='Error'>Problem in Sending Mail.</p>";
}
?>