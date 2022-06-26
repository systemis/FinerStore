<?php 
require './vendor/autoload.php';
include './database.php';
include './models/order.php';
include './utils.php';
include './common.php';

/**
* This controller will get specific order with id
*/
$id = htmlspecialchars($_GET["id"]); 
$orderControl = new OrderControl($db);
$document = $orderControl->findById($id);
echo json_encode($document);
