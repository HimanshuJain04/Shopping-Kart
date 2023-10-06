

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { carouselData } from "./carouselData";

const items = carouselData.map((item, index) => (
    <div key={index} className='w-full h-[80vh] flex justify-center items-center '>
        <img className='cursor-pointer h-full w-[98%]  ' role='presentation' src={item.image} alt={"image"} />
    </div>
));


const HomeMainCarousel = () => (
    <AliceCarousel
        items={items}
        disableSlideInfo={false}
        autoPlay
        infinite
        autoPlayInterval={1500}
        disableButtonsControls

    />
);

export default HomeMainCarousel;