import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Product } from "../../entities";
import Layout from "../../layouts/layout";
import ProductsCarousel from "@/src/components/product-carousel";
import { ProductAction } from "../../actions/product.action";
import { CartAction } from "../../actions/cart.action";
import { toast } from "react-toastify";
import classnames from "classnames";
import { useApp } from "../../hooks/app.hook";

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product>();
  const [products, setProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [productSize, setProductSize] = useState<string>("Small");
  const { user } = useApp();

  const productAction = new ProductAction();
  const cartAction = new CartAction();

  const handleGetData = async () => {
    const products = await productAction.getProductList();
    setProducts(products);
  }

  const handleAddToCard = async () => {
    if (!user?._id?.$oid) return
    if (!quantity) {
      return;
    }

    await cartAction.addProdutCard({
      productId: product?._id?.$oid,
      quantity,
    });
    toast.success("Product added successfully");
  }

  useEffect(() => {
    handleGetData();
  }, []);

  useEffect(() => {
    (async () => {
      const product = await productAction.getProductDetail(router?.query?.id as string);
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
          <div className="col-md-7 md:pl-[35px] md:mt-0 mt-[0px]">
            <p className="mt-[10px] text-[25px] font-bold" style={{ fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif' }}>
              {product?.name}
            </p>
            <p className="text-[14px] font-[100]">Product ID: {product?._id?.$oid?.slice(product?._id?.$oid?.length - 3)}</p>
            <p className="text-red text-[#000] text-[25px]">${product?.price}</p>
            <div className="mt-[20px]">
              <p className="content_product"> Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt.
                Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.
              </p>
              <div className="pt-[20px]">
                <span className="mt-[20px] text-[14px] font-[100] mr-[10px]">Quantity:</span>
                <input
                  className="rounded-[3px] w-[50px] py-[10px] border-[gray] border-solid border-[1px] mt-[5px]"
                  type="number"
                  value={quantity}
                  style={{ marginLeft: 0 }}
                  onChange={e => setQuantity(parseFloat(e.target.value))}
                />
              </div>
              <br />
              {/* <p className="mt-[20px] text-[14px] font-[100]">Size:</p> */}
              <div className="grid grid-cols-3 max-w-[80%]">
                {product?.size?.map((item, index) => (
                  <div className="py-[10px] pr-[10px]" key={"size-item-" + index}>
                    <div
                      onClick={() => setProductSize(item)}
                      className={classnames("p-[16px] rounded-[3px] cursor-pointer", { "border": productSize !== item })}
                      {...(productSize === item && "green" && {
                        style: {
                          border: "1px solid green"
                        }
                      })}>
                      <p className="text-center">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className={classnames("rounded-[25px] px-[15px] py-[10px] mt-[10px] min-w-[150px]", {
                  "bg-[gray]": !user?._id?.$oid,
                  "bg-black": user?._id?.$oid,
                })}
                onClick={() => handleAddToCard()}
                disabled={!user?._id?.$oid}
              >
                <p className="text-white">Add To Cart</p>
              </button>
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