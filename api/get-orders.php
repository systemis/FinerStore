<?php 
require './vendor/autoload.php';
include './database.php';
include './models/order.php';
include './utils.php';
include './common.php';

 /**
  * This controller will get all order
  */
 $orderControl = new OrderControl($db);
 $document = $orderControl->findAll();
 echo json_encode($document);
?>