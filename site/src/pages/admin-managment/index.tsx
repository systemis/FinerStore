import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Layout from "../../layouts/layout";
import { ProductAction } from "../../actions/product.action";
import { Product } from "../../entities";
import { useRouter } from "next/router";

const AdminManagmentPage: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter(); 
  const productAction = new ProductAction();

  useEffect(() => {
    (async () => {
      const products = await productAction.getProductList();
      setProducts(products);
    })();
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="md:w-[650px] mx-auto">
          <ul className="list-group shadow">
            <li className="list-group-item">
              <div className="media align-items-lg-center p-3 row">
                <div className="media-body order-2 order-lg-1 col-md-8">
                  <p className="mt-0 font-weight-bold mb-2 text-[30px] font-bold">Awesome product</p>
                  <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
                  <div className="d-flex align-items-center justify-content-between mt-1">
                    <h6 className="font-weight-bold my-2">$120.00</h6>
                    <ul className="list-inline small">
                      <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                      <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                      <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                      <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                      <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                    </ul>
                  </div>
                </div>
                <img 
                  src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" 
                  alt="Generic placeholder image" 
                  width="200" 
                  className="ml-lg-5 order-1 order-lg-2 col-md-4" />
              </div>
            </li>
            {products?.map((item, index) => (
              <li className="list-group-item cursor-pointer" key={`product-item-${index}`} onClick={() => window.location.href = `/admin-managment/edit/${item._id.$oid}`}>
                <div className="media align-items-lg-center p-3 row">
                  <div className="media-body order-2 order-lg-1 col-md-8">
                    <p className="mt-0 font-weight-bold mb-2 text-[30px] font-bold">{item?.name}</p>
                    <p className="font-italic text-muted mb-0 small">{item?.description}</p>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <h6 className="font-weight-bold my-2">{item?.price}</h6>
                      <ul className="list-inline small">
                        <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                        <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                        <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                        <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                        <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                      </ul>
                    </div>
                  </div>
                  <img 
                    src={item?.image}
                    alt="Generic placeholder image" 
                    width="200" 
                    className="ml-lg-5 order-1 order-lg-2 col-md-4" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed right-0 bottom-0 flex p-[20px] pb-[15px]" onClick={() => router.push("/admin-managment/add-product")}>
        <button className="bg-[#ffaf37] p-[20px] rounded-[50%] text-[25px] pb-[10px] ">
          <i className='bx bxs-add-to-queue' ></i>
        </button>
      </div>
      <div className="fixed right-[0] bottom-[80px] flex p-[20px] text-[25px]" onClick={() => router.push("/admin-managment/order-tracking")}>
        <button className="bg-[#69ffca] p-[20px] pb-[10px] rounded-[50%]">
          <i className='bx bxs-store' ></i>
        </button>
      </div>
    </Layout>
  );
};

export default AdminManagmentPage;