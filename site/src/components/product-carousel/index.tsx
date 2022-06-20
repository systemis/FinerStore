import ProductItem from "../product-item";
import { Product } from "../../entities";

import { Swiper, SwiperSlide } from 'swiper/react';

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if (window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

export interface ProductCaroselProps {
  products: Product[]
}

const ProductsCarousel = ({ products }: ProductCaroselProps) => {
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel px-[30px] pt-[50px]">
      <Swiper
        spaceBetween={spaceBetween}
        loop={true}
        centeredSlides={centeredSlides}
        watchOverflow={true}
        slidesPerView={slidesPerView}
        className="swiper-wrapper">
        {products.map(item => (
          <SwiperSlide key={item._id.$oid}>
            <ProductItem
              key={item._id.$oid}
              product={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductsCarousel