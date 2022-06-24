import { useState, useEffect } from 'react';
import { Product } from "../entities";
import Layout from '../layouts/layout';
import PageIntro from '../components/page-info';
import ProductsCarousel from '../components/product-carousel';
import CustomerServiceInfo from "../components/customer-service";
import { ProductAction } from "../actions/product.action";

const HomePage = () => {
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
      <PageIntro />
      <CustomerServiceInfo />
      <ProductsCarousel products={products} />
    </Layout>
  )
}


export default HomePage; 