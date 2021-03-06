<?php 
require 'vendor/autoload.php';
include './common.php';
include './database.php';
include './utils.php';
include './models/product.php';

/**
* This controller will get all product
*/
$name = htmlspecialchars($_GET["name"]); 
$productControl = new ProductControl($db);
$document = $productControl->findOneByName($name);
echo json_encode($document);
