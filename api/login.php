<?php 
require 'vendor/autoload.php';
include './common.php';
include './models/user.php';
include './database.php';
include './models/product.php';
include './utils.php';


$userControl = new UserControl($db);

$entityBody = file_get_contents('php://input');
$entityBody = json_decode($entityBody);

$user = $userControl->findOneByUsername($entityBody->username);
if ($user->password == $entityBody->password) {
  echo json_encode($user);
} else {
  echo "Unauthorized";
}
