import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import styles from './index.module.scss';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  const slideData = useMemo(() => {
    return [
      {
        title: 'Get summer collection for beach ?',
        image: 'https://im.uniqlo.com/global-cms/spa/resb50ffdad35a8637d3445ba14f74a9343fr.jpg',
      },
      {
        title: 'Comfortable home wearing',
        image: 'https://im.uniqlo.com/global-cms/spa/rese6fd35cbb576c09db85e39757df59b85fr.jpg',
      },
      {
        title: 'Comfortable home wearing',
        image: 'https://im.uniqlo.com/global-cms/spa/rese7137e48702d130e7e7de77ccb3411c9fr.jpg',
      },
    ];
  }, []);

  return (
    <section className={styles['page-intro']}>
      <Swiper navigation effect="fade" className={'swiper-wrapper'}>
        {slideData.map((item, index: number) => (
          <SwiperSlide key={`${item.title}${index}`}>
            <div className={styles['page-intro__slide']} style={{ backgroundImage: `url(${item.image})` }}>
              <div className={styles['container']}>
                <div className={styles['intro_slide']}>
                  <h2>{item.title}</h2>
                  <a href="#" className={styles['btn-shop']}>
                    <i className='bx bx-right-arrow-alt'></i>
                    {' '}
                    Shop now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles['shop-data']}>
        <div className={styles['container']}>
          <ul className={styles['shop-data__items']}>
            <li>
              <i className={styles['icon-shipping']}></i>
              <div className={styles['data-item__content']}>
                <h4>Free Shipping</h4>
                <p>s a Prime member enjoy fast, FREE delivery on over 100 million items..</p>
              </div>
            </li>

            <li>
              <i className={styles['icon-shipping']}></i>
              <div className={styles['data-item__content']}>
                <h4>99% Satisfied Customers</h4>
                <p>Our dedicated customer service team knows that our customers want to talk with someone </p>
              </div>
            </li>

            <li>
              <i className={styles['icon-cash']}></i>
              <div className={styles['data-item__content']}>
                <h4>Originality Guaranteed</h4>
                <p>If you want to return or exchange your purchase</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro