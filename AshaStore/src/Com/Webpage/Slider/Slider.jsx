

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Slider = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
  }
  return (
    <div className="sliderHOme">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src="img/banner-01.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="img/banner_12052659brass_d.jpg"></img></SwiperSlide>
        
        <SwiperSlide><img src="img/banner_01124810Smart_Steamer_final_banner.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="img/banner_12052937masala_d.jpg"></img></SwiperSlide>
        
        <SwiperSlide><img src="https://demo2.posthemes.com/pos_junno/layout4/modules/posslideshows/images/cdc26dd3030922362e3262dde56d5e5bf12227f2_1_4.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="https://demo2.posthemes.com/pos_junno/layout4/modules/posslideshows/images/f61e0aec676f88e7212b6c18888231c77c4c57f2_2_4.jpg"></img></SwiperSlide> 
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default Slider