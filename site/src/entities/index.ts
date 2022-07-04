export enum UserRole {
  user = "USER::ROLE::USER",   
  admin = "USER::ROLE::ADMIN",
};

export interface Response {
  _id: { $oid: string },
  name: string;
  email: string; 
  subject: string;
  message: string;
}; 

export interface Product {
  _id: { $oid: string },
  name: string;
  price: number;
  image: string;
  description: string;
  size: string[];
}; 

export interface User {
  _id: { $oid: string },
  name: string; 
  avatar: string; 
  username: string;
  email: string;
  role: UserRole; 
};

export interface CardItem {
  productId: string; 
  quantity: number; 
};

export interface Order {
  _id: { $oid: string };
  userId: string; 
  productIds: string[]; 
  quantities: number[]; 
  address: string; 
  phoneNumber: string; 
  date: string; 
};

export interface CartItem {
  product: Product;
  quantity: number;
};

export interface OrderInfoDetail {
  details: CartItem[], 
  info: Order, 
  user: User,
};

export interface OrderRow {
  _id: string; 
  user: User; 
  phoneNumber: string; 
  address: string; 
  totalPrice: number;
  date: string;
};
