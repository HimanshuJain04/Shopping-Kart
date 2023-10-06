import React, { useContext } from 'react';
import { useState } from 'react';
import { Context } from '../Context';
import { Link } from 'react-router-dom';

function CardAndPreview({ item }) {
  const { setQuickViewData, setQuickView } = useContext(Context);

  return (

    <div className='w-[270px] h-[300px]'>

      {/* Image and button */}
      <div className='w-full group h-[80%] relative '>
        {/* image */}
        <div className='h-full w-full'>
          <img
            src={item?.thumbnail}
            alt={item?.title}
            loading="lazy"
            className="w-full h-full rounded-lg"
          />
        </div>

        {/* button */}
        <div onClick={() => { setQuickView(true); setQuickViewData(item) }} className=' transition-all duration-200 ease-in-out absolute bottom-4 left-[50%] cursor-pointer  text-center group-hover:block hidden bg-[white]/[0.8] rounded-md w-[80%] py-[6px] -translate-x-[50%]'>
          Quick View
        </div>

      </div>

      {/* Details */}
      <Link to={`product/${item?.id}`} className='items-center justify-between flex h-[20%] font-semibold'>

        {/* title */}
        <p>{`${item?.title.substring(0, 20)}...`}</p>

        {/* Price */}
        <p>${item?.price}</p>

      </Link>

    </div>
  )
}

export default CardAndPreview