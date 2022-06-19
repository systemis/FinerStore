<?php 
  require 'vendor/autoload.php';
  $client = new MongoDB\Client(
    'mongodb://stephen:Fy3lPmHWuRiadlEg@ac-gfqfrqd-shard-00-00.9ocs8qw.mongodb.net:27017,ac-gfqfrqd-shard-00-01.9ocs8qw.mongodb.net:27017,ac-gfqfrqd-shard-00-02.9ocs8qw.mongodb.net:27017/?ssl=true&replicaSet=atlas-qsl56v-shard-0&authSource=admin&retryWrites=true&w=majority'
  );
  
  $db = $client->test;
?>