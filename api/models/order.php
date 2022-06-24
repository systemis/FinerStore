<?php
class Order
{
  public $userId;
  public $productIds;
  public $quantities;

  function __construct($userId, $productIds, $quantities)
  {
    $this->productIds = $productIds;
    $this->quantities = $quantities;
    $this->userId = $userId;
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

  function getUserId($userId)
  {
    return $this->userId;
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
