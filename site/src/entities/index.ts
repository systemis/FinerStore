export enum UserRole {
  user = "USER::ROLE::USER",   
  admin = "USER::ROLE::ADMIN",
};

export interface Product {
  _id: { $oid: string },
  name: string;
  price: number;
  image: string;
  description: string;
}; 

export interface User {
  _id: { $oid: string },
  name: string; 
  avatar: string; 
  username: string;
  email: string;
  role: UserRole; 
};
