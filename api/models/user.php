<?php
class User
{
  public $name;
  public $username;
  public $email;
  public $password; 
  public $avatar;
  public $role;

  function __construct($name, $username, $email, $password, $avatar)
  {
    $this->name = $name;
    $this->username = $username;
    $this->email = $email;
    $this->avatar = $avatar;
    $this->password = $password; 
    $this->role = "USER::ROLE::USER";
    // $this->role = "USER::ROLE::ADMIN";
  }

  function setName($name)
  {
    $this->name = $name;
  }

  function getName()
  {
    return $this->name;
  }

  function setAvatar($avatar)
  {
    $this->avatar = $avatar;
  }

  function getAvatar()
  {
    return $this->avatar;
  }

  function setEmail($email)
  {
    $this->email = $email;
  }

  function getEmail()
  {
    return $this->email;
  }

  function setUsername($username)
  {
    $this->username = $username;
  }

  function getUsername()
  {
    return $this->username;
  }

  function setRole($role)
  {
    $this->role = $role;
  }

  function getRole()
  {
    return $this->role;
  }

  function setPassword($password) 
  {
    $this->password = $password; 
  }

  function getPassword() 
  {
    return $this->password; 
  }
}


class UserControl
{
  public $collection;
  function __construct($db)
  {
    $this->collection = $db->user;
  }

  function updateOne($id, $user)
  {
    $this->collection->updateOne(
      ["_id" => mongoObjectId($id)],
      ['$set' => [
        "name" => $user->name,
        "username" => $user->username,
        "email" => $user->email,
        "avatar" => $user->avatar,
        "role" => $user->role,
      ]]
    );

    return $this->findById($id);
  }

  function updatePassword($id, $newPassword)
  {
    $this->collection->updateOne(
      ["_id" => mongoObjectId($id)], 
      ['$set'=> [
        "password" => $newPassword,
      ]]
    );
  }

  function insertOne($user)
  {
    $result = $this->collection->insertOne([
      "name" => $user->name,
      "username" => $user->username,
      "email" => $user->email,
      "avatar" => $user->avatar,
      "password" => $user->password,
      "role" => $user->role,
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

  function findOneByUsername($username)
  {
    $document = $this->collection->findOne(["username" => $username]);
    return convertDocument($document);
  }
}
