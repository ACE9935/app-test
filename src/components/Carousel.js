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
const images=['ci1.jpg','ci2.jpg','ci3.jpg','ci4.jpg','ci5.jpg','ci6.jpg']
export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState({});

  return (
    <section className="px-2 sm:px-14 pt-[18rem] sm:pt-[24rem] pb-[4.6rem] bg-slate-100 relative carousel-container">
    <div className="w-full bg-main-gray h-[70%] sm:h-[60%] absolute bottom-0 left-0">
    <svg className="!w-full absolute inset-0 top-0 translate-y-[-99%]" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg"><path d="M 0,600 C 0,600 0,300 0,300 C 59.38770250368189,353.9162371134021 118.77540500736379,407.83247422680415 180,371 C 241.2245949926362,334.16752577319585 304.2860824742268,206.58634020618558 373,218 C 441.7139175257732,229.41365979381442 516.0802650957291,379.82216494845363 573,401 C 629.9197349042709,422.17783505154637 669.3928571428571,314.125 722,277 C 774.6071428571429,239.875 840.3483063328424,273.67783505154637 897,308 C 953.6516936671576,342.32216494845363 1001.2139175257732,377.1636597938144 1064,395 C 1126.7860824742268,412.8363402061856 1204.796023564065,413.6675257731959 1270,395 C 1335.203976435935,376.3324742268041 1387.6019882179676,338.1662371134021 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="#374151" fillOpacity="1"></path></svg>
    </div>

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
        className="max-w-[100rem] !pb-12"
      >
        {
            images.map((o,i)=>
                <SwiperSlide  key={i} className='relative hover:scale-150 aspect-[1/1.2] !w-[clamp(290px,40%,40rem)]'>
                <img src={o} key={i} className="object-fit-cover w-full h-full shadow-2xl"/>
              </SwiperSlide>
                )
        }
      </Swiper>
    </section>
  );
}