<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

mail("luke@learnmusictech.com", $subject, $message, "From: $email\r\n");
echo "Thank you for your enquiry! Gareth will get back to you as soon as possible.";

?>