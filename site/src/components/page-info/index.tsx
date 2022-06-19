import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import styles from './index.module.scss';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  return (
    <section className={styles['page-intro']}>
      <Swiper navigation effect="fade" className={'swiper-wrapper'}>
        <SwiperSlide>
          <div className={styles['page-intro__slide']} style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className={styles['container']}>
              <div className={styles['intro_slide']}>
                <h2>Get summer collection for beach ? </h2>
                <a href="#" className={styles['btn-shop']}><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['page-intro__slide']} style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className={styles['container']}>
              <div className={styles['intro_slide']}>
                <h2>Comfortable home wearing</h2>
                <a href="#" className={styles['btn-shop']}><i className={styles['icon-right']}></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles['shop-data']}>
        <div className={styles['container']}>
          <ul className={styles['shop-data__items']}>
            <li>
              <i className={styles['icon-shipping']}></i>
              <div className={styles['data-item__content']}>
                <h4>Free Shipping</h4>
                <p>On purchases over $199</p>
              </div>
            </li>

            <li>
              <i className={styles['icon-shipping']}></i>
              <div className={styles['data-item__content']}>
                <h4>99% Satisfied Customers</h4>
                <p>Our clients' opinions speak for themselves</p>
              </div>
            </li>

            <li>
              <i className={styles['icon-cash']}></i>
              <div className={styles['data-item__content']}>
                <h4>Originality Guaranteed</h4>
                <p>30 days warranty for each product from our store</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro