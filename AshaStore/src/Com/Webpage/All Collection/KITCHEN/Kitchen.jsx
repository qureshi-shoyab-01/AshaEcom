import React from 'react'
import './Kitchen.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay} from 'swiper/modules';


const Kitchen = () => {
  return (
    <div className='Collation-main'>
    <h2 className='MANUCARD'>Our Kitchen Top Collection</h2>
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
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
            <img className="Instsgarmdatamanu" src="img/Kitchen.jpg"/>
            </SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Kitchen.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Kitchen.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Kitchen.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Kitchen.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Kitchen.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Kitchen.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Kitchen.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Kitchen.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Kitchen.jpg"/></SwiperSlide>
            <SwiperSlide><img className="Instsgarmdatamanu" src="img/Kitchen.jpg"/></SwiperSlide>


        </Swiper>
    </div>
</div>
  )
}

export default Kitchen