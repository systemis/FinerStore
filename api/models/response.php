<?php
// require '../vendor/autoload.php';

class ResponseControl
{
  public $collection;
  function __construct($db)
  {
    $this->collection = $db->response;
  }

  function updateOne($id, $response)
  {
    $this->collection->updateOne(
      ["_id" => mongoObjectId($id)],
      ['$set' => [
        "name" => $response->name,
        "email" => $response->email,
        "subject" => $response->subject,
        "message" => $response->message,
      ]]
    );

    return $this->findById($id);
  }

  function insertOne($response)
  {
    $result = $this->collection->insertOne([
      "name" => $response->name,
      "email" => $response->email,
      "subject" => $response->subject,
      "message" => $response->message,
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

class Response
{
  public $name;
  public $email;
  public $subject;
  public $message;

  function __construct($name, $email, $subject, $message)
  {
    $this->name = $name;
    $this->email = $email;
    $this->subject = $subject;
    $this->message = $message;
  }
}
