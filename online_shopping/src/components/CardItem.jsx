import React, { useContext, useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../Context';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { red } from '@mui/material/colors';

function CardItem({ item }) {
  const { handleWishList, wishListItems } = useContext(Context);
  const [flag, setFlag] = useState(false)

  function wishListHandler() {

    handleWishList(item);
    flagHandler();
  }

  function flagHandler() {
    setFlag(false);
    wishListItems.forEach((element) => {

      if (element?.id === item?.id) {
        setFlag(true);
        return;
      }
    });
  }

  useEffect(() => {
    flagHandler();
  }, [wishListItems]);

  return (

    <div className='flex flex-col gap-5 group transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 hover:shadow-black relative border-2 my-5 border-[black]/[0.1] rounded-md' >

      {/* image */}
      <div className='w-[250px] h-[full] md:w-[300px] md:h-[350px] overflow-hidden items-center flex justify-center'>
        <img src={item?.thumbnail} alt={item?.title} loading='lazy' className='bg-cover max-w-[240px] max-h-[280px] md:max-h-[300px]  md:max-w-[300px]' />
      </div>

      {/* wishlist icon */}
      <div onClick={wishListHandler} className='cursor-pointer absolute z-1 -top-3 -right-3 p-5'>
        {
          flag ? (<FavoriteOutlinedIcon sx={{ color: red[500] }} fontSize='large' />) : (<FavoriteBorderIcon fontSize='large' />)
        }

      </div>

      {/* Details */}
      <Link to={`/product/${item?.id}`} className=' gap-2 absolute bg-white w-full p-3 bottom-0 group-hover:bottom-5 transition-all duration-300 ease-in-out cursor-pointer flex flex-col'>
        <p className='text-[#686666] font-bold text-sm'>{item?.brand}</p>
        <p className='font-semibold group-hover:hidden block'>{`${item?.title.substring(0, 30)}...`}</p>
        <p className='font-semibold group-hover:block hidden'>{item?.title}</p>
        <div className='flex flex-row items-center gap-2'>
          <p className='font-bold'>$ {item?.price}</p>
          <p className='text-base font-semibold text-[#7f7d7d] line-through '>$100</p>
          <p className='text-sm text-[brown] font-semibold'>34% off</p>
        </div>
      </Link>

    </div>
  )
}

export default CardItem
