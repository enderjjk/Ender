<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['text'];

    mail("enderstudio@gmail.com", "Message sent via EnderStudio site from: " .$email, $message);
}
?>