import React from "react";
import { useRouter } from "next/router";
import { Product } from "../../entities/";

export interface ProductItemProps {
  product: Product,
};

const ProductItem: React.FC<ProductItemProps> = ({ product: {
  _id,
  name,
  image,
  price,
} }) => {
  const router = useRouter();
  return (
    <div className='w-full'>
      <div className="special-img position-relative overflow-hidden">
        <img src={image} className="w-[380px] md:h-[442px] h-[428px]" />
        <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
          <i className="fas fa-heart"></i>
        </span>
      </div>
      <div className="text-left">
        <p
          className="text-capitalize mt-3 mb-1 cursor-pointer"
          onClick={() => router.push(`/product/${_id.$oid}`)}>{name}</p>
        <span className="fw-bold d-block">$ {price}</span>
      </div>
    </div>
  );
}

export default ProductItem; 