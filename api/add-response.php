<?php
require 'vendor/autoload.php';
include './database.php';
include './utils.php';
include './common.php';
include './models/response.php';

$responseControl = new ResponseControl($db);

$entityBody = file_get_contents('php://input');
$entityBody = json_decode($entityBody);
$response = new Response(
  $entityBody->name,
  $entityBody->email,
  $entityBody->subject,
  $entityBody->message,
);

$data = $responseControl->insertOne($response);
echo json_encode($data);
