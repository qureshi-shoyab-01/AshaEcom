import React from 'react'
import './Cookin.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,Pagination } from 'swiper/modules';

const Cookin = () => {
  return (
    <div className='Collation-main'>
    <h2 className='MANUCARD'>Our Cookin Top Collection</h2>
    <p class="sub-title">Browse The Collection of Top Products</p>

    <div className='slidercard'>
        <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
                clickable: true, 
            }}
            breakpoints={{
                280: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                414: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            modules={[Autoplay,Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                
            </SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="https://www.demo4.arinfotech.co/clazep/public/storage/instagram/4F959AF3E82C.jpg"></img></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="https://www.demo4.arinfotech.co/clazep/public/storage/instagram/4F959AF3E82C.jpg"></img></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="https://www.demo4.arinfotech.co/clazep/public/storage/instagram/4F959AF3E82C.jpg"></img></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="https://www.demo4.arinfotech.co/clazep/public/storage/instagram/4F959AF3E82C.jpg"></img></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="https://www.demo4.arinfotech.co/clazep/public/storage/instagram/4F959AF3E82C.jpg"></img></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="https://www.demo4.arinfotech.co/clazep/public/storage/instagram/4F959AF3E82C.jpg"></img></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="https://www.demo4.arinfotech.co/clazep/public/storage/instagram/4F959AF3E82C.jpg"></img></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="https://www.demo4.arinfotech.co/clazep/public/storage/instagram/4F959AF3E82C.jpg"></img></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="https://www.demo4.arinfotech.co/clazep/public/storage/instagram/4F959AF3E82C.jpg"></img></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="https://www.demo4.arinfotech.co/clazep/public/storage/instagram/4F959AF3E82C.jpg"></img></SwiperSlide>


        </Swiper>
    </div>
</div>
  )
}

export default Cookin