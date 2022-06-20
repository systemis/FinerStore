import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Product } from "../../entities";
import { request } from "../../provider/request";
import Layout from "../../layouts/layout";

const ProductDetailPage: NextPage = () => {
  const [product, setProduct] = useState<Product>();
  const router = useRouter();

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
                <div className="carousel-item">
                  <img className="d-block w-100" src={product?.image} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={product?.image} alt="Third slide" />
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

          <div className="col-md-7 md:pl-[35px]">
            <p className="newarrival text-center">New</p>
            <h2>{product?.name}</h2>
            <p>Product Code: {product?.name}</p>
            <p className="price">USD $${product?.price}</p>

            <p><b>Availability:</b> In Sock</p>
            <p><b>Condition:</b> New</p>
            <p><b>Brand:</b> THD Company</p>

            <label>Quantity: </label>
            <input type="text" value="1" />

            <select>
              <option>Choose Size</option>
              <option>XXL</option>
              <option>XL</option>
              <option>Large</option>
              <option>Medium</option>
              <option>Small</option>
            </select>
            <a href="" className="btn">Add To Cart</a>
            <h3>Product Detail <i className="fa fa-indent"></i></h3>
            <p className="content_product"> Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt.
              Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetailPage;