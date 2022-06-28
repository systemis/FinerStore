<?php
require 'vendor/autoload.php';
include './database.php';
include './utils.php';
include './common.php';
include './models/product.php';

$productControl = new ProductControl($db);

$entityBody = file_get_contents('php://input');
$entityBody = json_decode($entityBody);
$product = new Product(
  $entityBody->name,
  $entityBody->image,
  $entityBody->description,
  $entityBody->price,
  $entityBody->size,
);

$data = $productControl->insertOne($product);
echo json_encode($data);
