<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $sender = $_POST['email'];
    $message = $_POST['message'];

    $myEmail = 'travisb.burch@gmail.com';
    $header = "From: ".$sender." via cuttlefish page";
    $text = "You have received a message from".$name.".\n\n".$message;
    $subject = "Web Form Message";
    
    mail($myEmail,$subject,$text,$header);
    header("Location: index.html#mailsend");
}

?>