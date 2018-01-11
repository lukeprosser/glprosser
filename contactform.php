<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $mailTo = "luke@learnmusictech.com";
  $headers = "From: ".$mailFrom;
  $txt = "Website enquiry from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsent");
}

 ?>
