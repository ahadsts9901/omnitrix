import './styles.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import React from 'react';

export default function Main({ images }: any) {
  return (
    <>
      <div className='main'>
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
        >
          {
            images?.map((image: any, i: number) => (
              <React.Fragment key={i}>
                <SwiperSlide>
                  <img
                    src={image[0]}
                  />
                </SwiperSlide>
              </React.Fragment>
            ))
          }
        </Swiper>
      </div>
    </>
  );
}