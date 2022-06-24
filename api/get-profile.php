<?php
require 'vendor/autoload.php';
include './database.php';
include './utils.php';
include './common.php';
include './models/product.php';
include './models/user.php';

$userControl = new UserControl($db);

$id = htmlspecialchars($_GET["user_id"]); 
$user = $userControl->findById($id);
echo json_encode($user);

