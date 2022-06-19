<?php 
require 'vendor/autoload.php';
include './database.php';
include './product.php';
include './utils.php';

 /**
  * This controller will get all product
  */
 $productControl = new ProductControl($db);
 $document = $productControl->findAll();
 echo json_encode($document);
?>