<?php
$servername = "localhost";
$username = "u890759807_budbin";
$password = "Shubham@1999";
$dbname = "u890759807_details";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>