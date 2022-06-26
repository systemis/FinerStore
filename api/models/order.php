<?php
class Order
{
  public $userId;
  public $productIds;
  public $quantities;
  public $address; 
  public $phoneNumber; 

  function __construct(
    $userId, 
    $productIds, 
    $quantities, 
    $address, 
    $phoneNumber, 
  )
  {
    $this->productIds = $productIds;
    $this->quantities = $quantities;
    $this->userId = $userId;
    $this->address = $address;
    $this->phoneNumber = $phoneNumber;
  }

  function setProductIds($productIds)
  {
    $this->productids = $productIds;
  }

  function getProductIds()
  {
    return $this->productIds;
  }

  function setQuantities($quantities)
  {
    $this->quantities = $quantities;
  }

  function setUserId($userId)
  {
    $this->userId = $userId;
  }

  function getUserId()
  {
    return $this->userId;
  }

  function getAddress() 
  {
    return $this->address;
  }

  function setAddress($address)
  {
    $this->address = $address;
  }

  function getPhoneNumber() 
  {
    return $this->phoneNumber;
  }

  function setPhoneNumber($phoneNumber)
  {
    $this->phoneNumber = $phoneNumber;
  }
}

class OrderControl
{
  public $collection;
  function __construct($db)
  {
    $this->collection = $db->order;
  }

  function updateOne($id, $order)
  {
    $this->collection->updateOne(
      ["_id" => mongoObjectId($id)],
      ['$set' => [
        "userId" => $order->userId,
        "productIds" => $order->productIds,
        "quantities" => $order->quantities,
      ]]
    );

    return $this->findById($id);
  }

  function insertOne($order)
  {
    $result = $this->collection->insertOne([
      "userId" => $order->userId,
      "productIds" => $order->productIds,
      "quantities" => $order->quantities,
      "address" => $order->address,
      "phoneNumber" => $order->phoneNumber,
    ]);

    return $this->findById($result->getInsertedId());
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
}
