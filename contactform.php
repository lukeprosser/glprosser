<?php

// Variables
$to = 'luke@learnmusictech.com';
$subject = "GLProsser Website Enquiry";


$error_open = "<label class='error'>";
$error_close = "</label>";
$valid_form = TRUE;
$redirect = "success.php";

$form_elements = array('name', 'email', 'subject', 'message');
$required = array('name', 'email', 'subject', 'message');

// Loop through each item in array to make error variables start out blank
foreach ($required as $require)
{
  $error($require) = '';
}

if (isset($_POST['submit']))
{
  // process form

  // get form data
  foreach ($form_elements as $element)
  {
    $form($element) = htmlspecialchars($_POST[$element]);
  }

  // check form elements
    // check required fields
    if($form['name'] == '')
    {
      $error['name'] = $error_open . "Please fill in all required fields" $error_close;
      $valid_form = FALSE;
    }
    if($form['email'] == '')
    {
      $error['email'] = $error_open . "Please fill in all required fields" $error_close;
      $valid_form = FALSE;
    }
    if($form['subject'] == '')
    {
      $error['subject'] = $error_open . "Please fill in all required fields" $error_close;
      $valid_form = FALSE;
    }
    if($form['message'] == '')
    {
      $error['message'] = $error_open . "Please fill in all required fields" $error_close;
      $valid_form = FALSE;
    }

    // check formatting
    if ($error['email'] == '' && !preg_match('^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$', $form['email']))
    {
      $error['email'] = $error_open . "Please enter a valid email address" . $error_close;
      $valid_form = FALSE;
    }

  // check for bad data
  if (contains_bad_str($form['name']) ||
      contains_bad_str($form['email']) ||
      contains_bad_str($form['subject']) ||
      contains_bad_str($form['message']))
  {
      $valid_form = FALSE;
  }
  if (contains_newlines($form['name']) ||
      contains_newlines($form['email']) ||
      contains_newlines($form['subject'])
  {
      $valid_form = FALSE;
  }

  // check if form is valid
  if ($valid_form)
  {
    // create message
    $message = "Name: " . $form['name'] . "\n";
    $message .= "Email: " . $form['email'] . "\n\n";
    $message .= "Subject: " . $form['subject'] . "\n\n";
    $message .= "Message: " . $form['message'];

    // headers go here

    // send email
    mail($to, $subject, $message, $headers);

    // redirect (eventually mail script)
    header("Location: ") . $redirect);
  }
  else
  {
    include('form.php');
  }

}
else
{
  foreach ($form_elements as $element)
  {
    $form($element) = '';
  }

  // display form
  include('form.php');
}

// Spam protection
function contains_bad_str($str_to_test) {
  $bad_strings = array(
    "content-type:",
    "mime-version",
    "multipart/mixed",
    "Content-Transfer-Encoding:",
    "bcc:",
    "cc:",
    "to:");

  foreach($bad_strings as $bad_string) {
    if(stristr(strtolower($str_to_test), $bad_string)) {
      return true;
    }
  }
  return false;
}

function contains_newlines($str_to_test) {
  if(preg_match("/(%0A|%0D|\\n+|\\r+)/i", $str_to_test) != 0) {
    return true;
  }
  return false;
}


?>
