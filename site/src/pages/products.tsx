import { useState, useEffect } from "react";
import { NextPage } from "next";
import { Product } from "../entities";
import ProductItem from "../components/product-item";
import Layout from "../layouts/layout";
import { ProductAction } from "../actions/product.action";

const ProductsListPage: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const productAction = new ProductAction();

  const handleGetData = async () => {
    const products = await productAction.getProductList();
    setProducts(products);
  }

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <Layout>
      <section id="special">
        <div className="container md:px-[50px] px-[20px]">
          <div className="product-content">
            <h5>Men's Tops <span>(133)</span></h5>
            <form className="product-filter">
              <div className="form-group">
                <label>Show products</label>
                <select className="form-select">
                  <option selected>Popular</option>
                </select>
              </div>
              <div className="form-group">
                <label>Sort by</label>
                <select className="form-select">
                  <option selected>Popular</option>
                </select>
              </div>
            </form>
          </div>
          <div className="special-list row mx-0">
            {products.map((item, index) => (
              <div className="col-md-6 col-lg-4 col-xl-3 p-2" key={`product-item ${index}`}>
                <ProductItem product={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ProductsListPage; 