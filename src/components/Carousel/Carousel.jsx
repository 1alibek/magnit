// import 'react-alice-carousel/lib/alice-carousel.css'
// import AliceCarousel from 'react-alice-carousel'
// import { items } from './CarouselItem'
// const Carousel = () => {
//   return <AliceCarousel items={items} infinite mouseTracking autoPlay  />
// }

// export default Carousel
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Image } from "@chakra-ui/react";

export default function Carousel() {
  return (
    <>
      <Swiper         pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          {" "}
          <Image
            width={"100%"}
            aspectRatio={"16/9"}
            borderRadius={"12px"}
            maxH={"600px"}
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1678533511793-3e4098b854e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          ,
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            width={"100%"}
            aspectRatio={"16/9"}
            borderRadius={"12px"}
            maxH={"600px"}
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1677144646095-ecd95d06cd71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            width={"100%"}
            aspectRatio={"16/9"}
            borderRadius={"12px"}
            maxH={"600px"}
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
