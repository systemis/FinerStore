export interface Product {
  _id: { $oid: string },
  name: string;
  price: string;
  image: string;
  description: string;
}; 