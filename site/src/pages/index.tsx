import { useState, useEffect } from 'react';
import { Product } from "../entities";
import { request } from '../provider/request';
import Layout from '../layouts/layout';
import PageIntro from '../components/page-info';
import ProductsCarousel from '../components/product-carousel';
import CustomerServiceInfo from "../components/customer-service";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleGetData = async () => {
    const products = await request<Product[]>("/get-products.php") || [];
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