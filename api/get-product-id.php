<?php 
require './vendor/autoload.php';
include './database.php';
include './models/product.php';
include './utils.php';
include './common.php';

/**
* This controller will get all product
*/
$id = htmlspecialchars($_GET["id"]); 
$productControl = new ProductControl($db);
$document = $productControl->findById($id);
echo json_encode($document);
