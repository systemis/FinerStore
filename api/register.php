<?php
require 'vendor/autoload.php';
include './database.php';
include './utils.php';
include './common.php';
include './models/product.php';
include './models/user.php';

$userControl = new UserControl($db);

$entityBody = file_get_contents('php://input');
$entityBody = json_decode($entityBody);
$user = new User(
  $entityBody->name,
  $entityBody->username,
  $entityBody->email,
  $entityBody->avatar
);

$data = $userControl->insertOne($user);
echo json_encode($data);
