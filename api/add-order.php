<?php
require 'vendor/autoload.php';
include './database.php';
include './utils.php';
include './common.php';
include './models/order.php';

$orderControl = new OrderControl($db);

$entityBody = file_get_contents('php://input');
$entityBody = json_decode($entityBody);
$order = new order(
  $entityBody->userId,
  $entityBody->products,
  $entityBody->quantities,
  $entityBody->address, 
  $entityBody->phoneNumber, 
);

$data = $orderControl->insertOne($order);
echo json_encode($data);
