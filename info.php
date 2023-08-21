<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
  if(isset($_POST["username"])){
    $enteredUsername= $_POST["username"];

  if($enteredUsername ==="abc"){
    echo "Username is verified.";}
  else{
    echo"Username is not verified.";}
  }
}
?>
