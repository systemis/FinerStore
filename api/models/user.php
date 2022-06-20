<?php 
require '../vendor/autoload.php';


class User {
  public $name;
  public $username;
  public $email;
  public $avatar; 
  
  function __construct($name, $username, $email, $avatar) {
    $this->name = $name; 
    $this->image = $username; 
    $this->emaio = $email; 
    $this->avatar = $avatar;
  }

  function setName($name) {
    $this->name = $name;
  }

  function getName() {
    return $this->name;
  }

  function setImage($image) {
    $this->image = $image;
  }

  function getImage() {
    return $this->image; 
  }

  function setPrice($price) {
    $this->price = $price;
  }

  function getPrice() {
    return $this->price; 
  }

  function setDescription($description) {
    $this->description = $description;
  }

  function getDescription() {
    return $this->description;
  }
}
?>