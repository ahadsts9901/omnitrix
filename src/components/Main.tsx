import './styles.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import React, { useState } from 'react';

export default function Main({ images }: any) {

  const [swiper, setSwiper] = useState<any>(null);
  const [alien, setAlien] = useState<any>()

  const nextSlide = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  console.log(alien)

  return (
    <>
      <div className='main'>
        <div className="button" onClick={prevSlide}></div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {
            images?.map((image: any, i: number) => (
                <SwiperSlide key={i}>
                  <img
                    src={image[0]}
                    onClick={() => setAlien(image)}
                  />
                </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="button" onClick={nextSlide}></div>
      </div>
    </>
  );
}