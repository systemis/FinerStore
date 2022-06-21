<?php
require 'vendor/autoload.php';
include './database.php';
include './utils.php';
include './common.php';
include './models/product.php';

$productControl = new ProductControl($db);

$entityBody = file_get_contents('php://input');
$entityBody = json_decode($entityBody);
$productId = $entityBody->_id;
$product = new Product(
  $entityBody->name,
  $entityBody->image,
  $entityBody->description,
  $entityBody->price
);

$data = $productControl->updateOne($productId, $product);
echo json_encode($data);
