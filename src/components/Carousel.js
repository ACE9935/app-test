import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs,EffectCoverflow,Pagination } from "swiper";

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState({});

  return (
    <section className="px-2 sm:px-14 py-36 bg-slate-100 relative">
    
      <Swiper
        initialSlide={1}
        effect={"coverflow"}
        style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-size": "25px",
          }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        freeMode
        loop
        pagination={{clickable:true}}
        click
        navigation
        spaceBetween={100}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination,Navigation]}
        className="max-w-[100rem]"
      >
        <SwiperSlide className='relative hover:scale-150 aspect-[1/1.2] !w-[clamp(290px,40%,40rem)]'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="w-full h-full"/>
        </SwiperSlide>
        <SwiperSlide className='relative hover:scale-150 aspect-[1/1.2] !w-[clamp(290px,40%,40rem)]'>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="w-full h-full"/>
        </SwiperSlide>
        <SwiperSlide className='relative hover:scale-150 aspect-[1/1.2] !w-[clamp(290px,40%,40rem)]'>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="w-full h-full"/>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}