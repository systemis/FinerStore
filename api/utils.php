<?php
  require 'vendor/autoload.php';

  function convertDocument($document) {
    if ($document == null) {
      return null; 
    }
    $encode = MongoDB\BSON\toJSON(MongoDB\BSON\fromPHP($document));
    return json_decode($encode);
  }

  function convertDocuments($documents) {
    $mixedProducts = array(); 
    foreach($documents as $cursor) {
      $document = convertDocument($cursor);
      array_push($mixedProducts, $document);
    }

    return $mixedProducts; 
  }

  function logConsole($data) {
    $console = $data;
    if (is_array($console))
    $console = implode(',', $console);
    echo "<script>console.log('Console: " . $console . "' );</script>";
  }
?>