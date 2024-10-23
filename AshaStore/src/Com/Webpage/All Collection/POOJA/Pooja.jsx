import React from 'react'
import './Pooja.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay} from 'swiper/modules';


const Pooja = () => {
  return (
    <div className='Collation-main'>
    <h2 className='MANUCARD'>Our Pooja Top Collection</h2>
    <p class="sub-title">Browse The Collection of Top Products</p>

    <div className='slidercard'>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // pagination={{
            //     clickable: true, 
            // }}
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
            modules={[Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
            <img className="Instsgarmdatamanu" src="img/Pooja.jpg"/>
            </SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Pooja.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Pooja.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Pooja.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Pooja.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Pooja.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Pooja.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Pooja.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Pooja.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Pooja.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Pooja.jpg"/></SwiperSlide>


        </Swiper>
    </div>
</div>
  )
}

export default Pooja