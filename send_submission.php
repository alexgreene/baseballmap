<?php
  $location_name = $_REQUEST['location_name'] ;
  $latitude = $_REQUEST['latitude'] ;
  $longitude = $_REQUEST['longitude'] ;
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['description'] ;
  $newline = '
';

$message .= $newline ;
$message .= "Latitude: " ;
$message .= $latitude ;
$message .= $newline ;
$message .= "Longitude: " ;
$message .= $longitude ;

  mail( "coach@thebaseballmap.com", "Grand slam, coach, we've got another location!", $message, "From: $email" );
  header( "Location: http://www.thebaseballmap.com/" );
?>
