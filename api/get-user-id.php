<?php 
require './vendor/autoload.php';
include './database.php';
include './models/user.php';
include './utils.php';
include './common.php';

/**
* This controller will get specific user with id
*/
$id = htmlspecialchars($_GET["id"]); 
$userControl = new UserControl($db);
$document = $userControl->findById($id);
echo json_encode($document);
