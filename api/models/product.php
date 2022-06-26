<?php
// require '../vendor/autoload.php';

/**
 * Initilize product data 
 */
function init_products($productControl)
{
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
    new Product(
      "T-Shirt Summer Vibes",
      "https://next-ecommerce-front.vercel.app/images/products/product-1.jpg
  ",
      "White Summer Vibes T-shirt in the uiKit line with a colorful print. Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.",
      89.99,
    ),

    new Product(
      "Waffle Long-Sleeve Henley T-Shirt",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/435805/item/goods_01_435805.jpg?width=750
  ",
      "RELAXED FIT. Perfect for comfortable, casual wear, this relaxed fit men's Henley helps keep you warm on fall evenings and cool weekend mornings.",
      24.90,
    ),

    new Product(
      "AIRism Polo Shirt",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/448947/item/goods_66_448947.jpg?width=750
  ",
      "The shirt is designed with quick-drying cotton fabric, with a collar, buttoned up, so it is both polite, luxurious and youthful and dynamic.",
      29.90,
    ),

    new Product(
      "BLOCKTECH Parka",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/449039/item/goods_03_449039.jpg?width=750
  ",
      " This high-performance parka is water-repellent, windproof, and extremely breathable. Versatile design suited for sports or casual wear. Comfortable fit allows easy movement.",
      59.90,
    ),

    new Product(
      "Final Fantasy II UT (Short-Sleeve Graphic T-Shirt)",
      "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/449075/item/usgoods_09_449075.jpg?width=750
  ",
      " This product is made with Primeblue, a high-performance recycled material made in part with Parley Ocean Plastic.",
      17.90,
    ),

    new Product(
      "Sweat Long-Sleeve Full-Zip Hoodie",
      "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/450189/item/usgoods_02_450189.jpg?width=750
  ",
      " Newly developed trim at the drawstring, zipper, and eyelets inspired by classic sweatshirts. Updated relaxed fit is roomy around the shoulders and chest, so it makes a great outer layer.",
      49.90,
    ),

    new Product(
      "Washable Milano Ribbed Long-Sleeve Sweater",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/445580/item/goods_66_445580.jpg?width=750
  ",
      " Cotton and polyester yarns are knitted alternately to achieve good elasticity and stretch. Machine-washable and shape-retaining for easy care.",
      39.90,
    ),

    new Product(
      "Washable Mock Neck Long-Sleeve Sweater",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/447963/item/goods_68_447963.jpg?width=750
  ",
      "Airy yarn creates a soft and fluffy knitted fabric.",
      14.90,
    ),

    new Product(
      "Extra Fine Merino Crew Neck Long-Sleeve Sweater",
      "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/450535/item/usgoods_03_450535.jpg?width=750
  ",
      "The ribbing on the sleeves and hem makes the tension of the knitted fabric increase gradually, and the details of the chest area have been designed for comfort.",
      46.99,
    ),

    new Product(
      "Ultra Stretch Skinny-Fit Color Jeans",
      "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/447656/item/usgoods_57_447656.jpg?width=750
  ",
      "Ultra Stretch satin fabric creates a comfortable skinny fit. Amazing stretch for comfort and a flattering style",
      41.90,
    ),

    new Product(
      "Ultra Light Down Jacket",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/443318/item/goods_05_443318.jpg?width=750
  ",
      "Surprisingly light and warm. Thin, light and warm down jacket. Attention to detail balances design and comfort",
      79.96,
    ),

    new Product(
      "Ultra Light Down Jacket",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/443318/item/goods_05_443318.jpg?width=750
  ",
      "Surprisingly light and warm. Thin, light and warm down jacket. Attention to detail balances design and comfort",
      69.90,
    ),
    new Product(
      "Stretch Wool Slim-Fit Jacke",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/444559/item/goods_05_444559.jpg?width=750",
      "Body and sleeves lined with carefully selected fabric for a comfortable feel. Premium fabric with added stretch. A slim fitting jacket combining style and comfort.",
      53.70,
    ),
    new Product(
      "DRY-EX Mapping Printed Crew Neck Short-Sleeve T-Shirt",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/445173/item/goods_41_445173.jpg?width=750
  ",
      "Performance shirt designed for cool comfort. Perfect for sports. Recycled Polyester. The inside of the cuff has a color line, providing an accent when sleeves are rolled up.",
      43.70,
    ),
    new Product(
      "Washed Jersey Easy Shorts",
      "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/445035/item/usgoods_67_445035.jpg?width=750
  ",
      "Casual shorts that have been washed for a rough texture. Drawstring waist allows easy size adjustment.",
      43.70,
    ),
    new Product(
      "Cotton Easy Relaxed Pants",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/445033/item/goods_69_445033.jpg?width=750
  ",
      "Pants made of soft jersey fabric. Elastic easy waist for comfort. Great stretch and a soft brushed surface. Convenient elastic easy waist design.",
      43.73,
    ),
    new Product(
      "Stretch Dry Sweat Long-Sleeve Pullover Hoodie",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/444969/item/goods_02_444969.jpg?width=750",
      "A quick-drying, highly versatile parka that moves with your body. Perfect for casual styling. Stretchy sweatshirt fabric featuring DRY technology.",
      84.12,
    ),
    new Product(
      "DRY-EX Shorts",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/446878/sub/goods_446878_sub8.jpg?width=750",
      "Performance shorts designed for cool comfort. A versatile item that is suitable as sportswear or for just taking it easy. Zippered pocket keeps your belongings secure while you work out.",
      65.27,
    ),
    new Product(
      "Cotton Easy Relaxed Pants",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/445033/item/goods_69_445033.jpg?width=750",
      "Pants made of soft jersey fabric. Elastic easy waist for comfort. With added stretch. Great stretch and a soft brushed surface. Inner drawstring pulls tight to keep them up even with heavy items in the pockets.",
      34.15,
    ),
    new Product(
      "Ultra Light Down Parka",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/443320/item/goods_09_443320.jpg?width=750",
      "Pants made of soft jersey fabric. Elastic easy waist for comfort. With added stretch. Great stretch and a soft brushed surface. Inner drawstring pulls tight to keep them up even with heavy items in the pockets.",
      34.15,
    ),
    new Product(
      "DRY-EX Crew Neck Short-Sleeve T-Shirt",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/449017/item/goods_03_449017.jpg?width=750",
      "Dries sweat quickly, leaving you feeling fresh and comfortable. Fold back the cuffs to show off the accent color stripes. Ergonomic mesh hole design for increased breathability in areas prone to heat and sweat.",
      34.15,
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

  function __construct($name, $image, $description, $price)
  {
    $this->name = $name;
    $this->image = $image;
    $this->price = $price;
    $this->description = $description;
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
