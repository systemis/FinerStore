<?php 
require './vendor/autoload.php';
include './database.php';
include './models/product.php';
include './utils.php';
include './common.php';

 /**
  * This controller will get all product
  */
 $productControl = new ProductControl($db);
 $document = $productControl->findAll();
 echo json_encode($document);
?>