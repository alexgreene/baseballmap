<?php
  $favorite_team = $_REQUEST['favorite_team'] ;
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['message'] ;
  $newline = '
';

$message .= $newline ;
$message .= "This person's favorite team is: " ;
$message .= $favorite_team ;

  mail( "coach@thebaseballmap.com", "Hey Coach, got some feedback for ya!", $message, "From: $email" );
  header( "Location: http://www.thebaseballmap.com/" );
?>
