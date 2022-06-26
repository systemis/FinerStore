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
$data = $productControl->deleteOne($productId);
echo json_encode($data);
