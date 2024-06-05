'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const data=[{ name:'Eva A.', testimonial : 'Excellent͏ communicator and very knowledgeable. Paige is a top-tier agent. She made the whole selling process a breeze. She is very knowledgeable and communicates with you every step of the way. We were on a tight schedule to l...'},
    {  name:'Alyssa A.', testimonial : 'I recently had to sell my home in a tricky market and from the minute I made contact with Paige Steckling, she was present and on top of things. Her expertise and knowledge, along with her wonderful team of people, made a stres...'}   ,
    { name : 'Clinta B.',testimonial : 'Page͏ was very invested. I loved working with Page. From the very beginning, she was very understanding of my situation and worked really hard to get top dollar for my house. She’s very educational and she’s super easy to work ...'},
    {
        name : "Wloof's",testimonial : 'Buying or selling in todays market is stressful. April Berezay brought her knowledge and enthusiasm to sell our home fast at our desired selling price. April communicated with us often and kept us advised on listings and how to...'
    }
]
export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
       {
        data.map((d)=>{return <SwiperSlide><div className='text-white text-[18px] px-[20px] py-[50px] max-w-[540px] bg-white'>
            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ta9s5lyvc04xrtvgyoti/testimonial-logo-45" className='w-[100px] mx-auto h-[100px]' alt="" />
            <h1 className='text-center text-[25px] capitalize text-black mb-[20px]'>{d.name}</h1>
            <p className='mx-[20px] mb-[20px] text-black text-center'>{d.testimonial}</p>
            <div className=' capitalize w-[220px] mx-auto hover:bg-opacity-100 bg-opacity-80 transition-all duration-1000 cursor-pointer text-center px-[46px] py-[20px] border-[2px] bg-[#C5A95E] text-white font-medium'>
                Read More
            </div>
            </div></SwiperSlide>})
       }
      </Swiper>
    </>
  );
}
