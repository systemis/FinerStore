<?php 
// require '../vendor/autoload.php';

/**
 * Initilize product data 
 */
function init_products($productControl) {
  $products = array(
    new Product(
      "T-Shirt Summer Vibes", 
      "https://next-ecommerce-front.vercel.app/images/products/product-1.jpg", 
      "White Summer Vibes T-shirt in the uiKit line with a colorful print. Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.", 
      89.99, 
    ), 
    new Product(
      "T-Shirt Summer Vibes",
      "https://next-ecommerce-front.vercel.app/images/products/product-2.jpg", 
      "White Summer Vibes T-shirt in the uiKit line with a colorful print. Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.", 
      89.99,
    ), 
    new Product(
      "T-Shirt Summer Vibes", 
      "https://next-ecommerce-front.vercel.app/images/products/product-3.jpg", 
      "White Summer Vibes T-shirt in the uiKit line with a colorful print. Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.",
      89.99,
    ), 
    new Product(
      "T-Shirt Summer Vibes", 
      "https://next-ecommerce-front.vercel.app/images/products/product-6.jpg",
      "White Summer Vibes T-shirt in the uiKit line with a colorful print. Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.",
      89.99, 
    ),
  );

  foreach($products as $product) {
    $productControl->insertOne($product);
  }
}

class ProductControl {
  public $collection; 
  function __construct($db)
  {
    $this->collection = $db->product;
  }

  function insertOne($product) {
    logConsole("Insert product with name $product->name");
    $result = $this->collection->insertOne( [ 
      "name" => $product->name, 
      "price" => $product->price, 
      "image" => $product->image,
      "description" => $product->description,
    ] );
    
    echo "Inserted with Object ID '{$result->getInsertedId()}'";
    return $result->getInsertedId();
  }

  function findAll() {
    $document = $this->collection->find();
    return convertDocuments($document);
  }

  function findById($id) {
    $document = $this->collection->findOne([ "_id" => mongoObjectId($id) ]);
    return convertDocument($document);
  }

  function findAllByName($name) {
    $cursor = $this->collection->find(["name" => $name]);
    return convertDocuments($cursor);
  }

  function findOneByName($name) {
    $document = $this->collection->findOne(["name" => $name]);
    return convertDocument($document);
  }
}

class Product {
  public $name;
  public $image; 
  public $price;
  public $description; 
  
  function __construct($name, $image, $description, $price) {
    $this->name = $name; 
    $this->image = $image; 
    $this->price = $price; 
    $this->description = $description;
  }

  function setName($name) {
    $this->name = $name;
  }

  function getName() {
    return $this->name;
  }

  function setImage($image) {
    $this->image = $image;
  }

  function getImage() {
    return $this->image; 
  }

  function setPrice($price) {
    $this->price = $price;
  }

  function getPrice() {
    return $this->price; 
  }

  function setDescription($description) {
    $this->description = $description;
  }

  function getDescription() {
    return $this->description;
  }
}
?>