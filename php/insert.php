<?php
include_once 'db.php';
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comments = $_POST['comments'];
    $sql = "INSERT INTO details (name,email,comments) VALUES ('$name','$email','$comments')";
    if (mysqli_query($conn, $sql)) {
        header('Location: https://budbin.co.in/#contact');
    } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
