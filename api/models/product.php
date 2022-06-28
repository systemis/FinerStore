<?php
// require '../vendor/autoload.php';

/**
 * Initilize product data 
 */
function init_products($productControl)
{
  $products = array(
    new Product(
      "Own the run color tee",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cd4eccaa6fcd42df9f48ae1c00c6f85e_9366/Own_the_Run_Colorblock_Tee_Blue_HB9161_21_model.jpg",
      "The t-shirt's bold colorway is like a jolt of endorphins before you've even hit the pavement. Once you do, the mesh panel and peach-soft fabric combine to create your comfiest run yet. Using sweat wicking or absorbent materials, adidas AEROREADY products keep you feeling dry.",
      30,
      array("Small", "Medium", "Large", "XL", "XXL"),
    ),
  );

  foreach ($products as $product) {
    $productControl->insertOne($product);
  }
}

class ProductControl
{
  public $collection;
  function __construct($db)
  {
    $this->collection = $db->product;
  }

  function updateOne($id, $product)
  {
    $this->collection->updateOne(
      ["_id" => mongoObjectId($id)],
      ['$set' => [
        "name" => $product->name,
        "image" => $product->image,
        "description" => $product->description,
        "price" => $product->price,
        "size" => $product->size,
      ]]
    );

    return $this->findById($id);
  }

  function insertOne($product)
  {
    $result = $this->collection->insertOne([
      "name" => $product->name,
      "price" => $product->price,
      "image" => $product->image,
      "description" => $product->description,
      "size" => $product->size,
    ]);

    return $this->findById($result->getInsertedId());
  }

  function deleteOne($id) {
    $this->collection->deleteOne(
    [
      ["_id" => mongoObjectId($id)],
    ]);

    return true;
  }

  function findAll()
  {
    $document = $this->collection->find();
    return convertDocuments($document);
  }

  function findById($id)
  {
    $document = $this->collection->findOne(["_id" => mongoObjectId($id)]);
    return convertDocument($document);
  }

  function findAllByName($name)
  {
    $cursor = $this->collection->find(["name" => $name]);
    return convertDocuments($cursor);
  }

  function findOneByName($name)
  {
    $document = $this->collection->findOne(["name" => $name]);
    return convertDocument($document);
  }
}

class Product
{
  public $name;
  public $image;
  public $price;
  public $description;
  public $size; 

  function __construct($name, $image, $description, $price, $size)
  {
    $this->name = $name;
    $this->image = $image;
    $this->price = $price;
    $this->description = $description;
    $this->size = $size;
  }

  function setName($name)
  {
    $this->name = $name;
  }

  function getName()
  {
    return $this->name;
  }

  function setImage($image)
  {
    $this->image = $image;
  }

  function getImage()
  {
    return $this->image;
  }

  function setPrice($price)
  {
    $this->price = $price;
  }

  function getPrice()
  {
    return $this->price;
  }

  function setDescription($description)
  {
    $this->description = $description;
  }

  function getDescription()
  {
    return $this->description;
  }
}

// init_products(new ProductControl($db));
