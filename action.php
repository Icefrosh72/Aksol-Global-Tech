<?php 
$conn = mysqli_connect('localhost','root','','admin_feed');
if(isset($_POST['submit'])) {
  $name = mysqli_real_escape_string($conn,$_POST['name']);
  $email = mysqli_real_escape_string($conn,$_POST['email']);
  $subject = mysqli_real_escape_string($conn,$_POST['subject']);
  $message = mysqli_real_escape_string($conn,$_POST['message']);

  $query = "INSERT INTO feed(name,email,subject,message,date) VALUES('$name','$email','$subject','$message',current_timestamp())";
  $tryit = mysqli_query($conn,$query);

  if(!$tryit){
    echo"<script>alert('Contact Failed')</script>";
    die();
  }
  else{
    echo"<script>alert('Sent Successfully')</script>";
    echo"<script>window.location.replace('contact.php')</script>";
  }
}
?>