import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Product } from "../../entities";
import { request } from "../../provider/request";
import Layout from "../../layouts/layout";
import ProductsCarousel from "@/src/components/product-carousel";

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product>();
  const [products, setProducts] = useState<Product[]>([]);

  const handleGetData = async () => {
    const products = await request<Product[]>("/get-products.php") || [];
    setProducts(products);
  }

  useEffect(() => {
    handleGetData();
  }, []);

  useEffect(() => {
    (async () => {
      const product = await request<Product>(
        `/get-product-id.php/?id=${router.query.id}`,
        { method: 'GET' },
      );
      setProduct(product);
    })();
  }, [router.query]);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={product?.image} alt="First slide" />
                </div>
              </div>
              <a className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
              </a>
              <a className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
              </a>
            </div>
          </div>
          <div className="col-md-7 md:pl-[35px] md:mt-0 mt-[30px]">
            <p className="newarrival text-center">New</p>
            <p className="mt-[10px] text-[25px] font-bold">{product?.name}</p>
            <p className="text-[14px] font-[100]">Product ID: {product?._id?.$oid?.slice(product?._id?.$oid?.length - 3)}</p>
            <p className="text-red text-[red] text-[25px]">${product?.price}</p>
            <div className="mt-[20px]">
              <p className="text-[14px] font-[100]">Product detail: </p>
              <p className="content_product"> Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt.
                Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.
              </p>
              <p className="mt-[20px] text-[14px] font-[100]">Quantity:</p>
              <input type="text" value="1" className="rounded-[3px] w-[50px] py-[10px] border-[gray] border-solid border-[1px] mt-[5px]" style={{ marginLeft: 0 }} />
              <br />
              <p className="mt-[20px] text-[14px] font-[100]">Size:</p>
              <select className="rounded-[20px] px-[15px] py-[9px] border-[gray] border-solid border-[1px] text-[14px] mt-[5px]" style={{ marginLeft: 0 }}>
                <option>Choose Size</option>
                <option>XXL</option>
                <option>XL</option>
                <option>Large</option>
                <option>Medium</option>
                <option>Small</option>
              </select>
              <span className="rounded-[20px] px-[15px] py-[9px] bg-[#fbb03b] ml-[20px]">
                <a>
                  Add To Cart
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <p className="text-[20px] md:text-[29px]">Selected just for you</p>
          <ProductsCarousel products={products} />
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetailPage;