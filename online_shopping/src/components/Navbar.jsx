import "core-js/stable";
import 'regenerator-runtime/runtime'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';



function Navbar() {

  const { login, cartItems, wishListItems } = useContext(Context);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showShippingHeader, setShowShippingHeader] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [showMic, setShowMic] = useState(true)

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const womensData = [
    {
      img: "https://th.bing.com/th/id/OIP.QGXiwmo2_famuvBTeJdC9AHaK0?pid=ImgDet&w=203&h=296&c=7&dpr=1.3",
      name: "womens-dresses"
    },
    {
      img: "https://th.bing.com/th/id/OIP.ikSp6ZXfGPQna5ZGzELeCwHaHa?pid=ImgDet&rs=1",
      name: "womens-shoes"
    },
    {
      img: "https://th.bing.com/th/id/OIP.y1FeLgVYQojT93FnIML0dwHaHa?pid=ImgDet&rs=1",
      name: "womens-watches"
    },
    {
      img: "https://th.bing.com/th/id/OIP.O4bmrQUqTT93d771ORujjAHaHa?pid=ImgDet&rs=1",
      name: "womens-bags"
    },
    {
      img: "https://th.bing.com/th/id/OIP.fJyNJhh3nombGSpnjRlF_QHaHa?pid=ImgDet&rs=1",
      name: "womens-jewellery"
    },
  ];

  const othersData = [
    {
      img: "https://th.bing.com/th/id/OIP.8uBciaVnWPhj3BqjYmH7wgHaDo?pid=ImgDet&rs=1",
      name: "All-Products"

    },
    {
      img: "https://th.bing.com/th/id/OIP.lt6FPKNcmOZWySqY26LlsgHaD1?pid=ImgDet&rs=1",
      name: "laptops"
    },
    {
      img: "https://th.bing.com/th/id/OIP.iq2GTKPVkOZqVk7LUX2VZAAAAA?pid=ImgDet&rs=1",
      name: "smartphones"
    },
    {
      img: "https://th.bing.com/th/id/OIP.mmYchP_4C7nnxra_AWGVeQHaFj?pid=ImgDet&rs=1",
      name: "fragrances"
    },
    {
      img: "https://th.bing.com/th/id/OIP.Ci6znpZrM2WPrCnBKiPVCwHaH_?pid=ImgDet&rs=1",
      name: "skincare"
    },
    {
      img: "https://th.bing.com/th/id/OIP.2fc31A8AmQzkr7PARaCIGgHaEr?pid=ImgDet&rs=1",
      name: "groceries"
    },
    {
      img: "https://th.bing.com/th/id/OIP.P1rZUjXkMT9zLrOibg9e4wHaD4?pid=ImgDet&rs=1",
      name: "home-decoration"
    },
    {
      img: "https://tobebright.com/wp-content/uploads/2018/10/DSC08133.jpg",
      name: "furniture"
    },
    {
      img: "https://th.bing.com/th/id/OIP.Ap35T9F-X6uvvo5BioG8KQHaHa?pid=ImgDet&rs=1",
      name: "sunglasses"
    },
    {
      img: "https://th.bing.com/th/id/OIP.KrDJCetuNOTpDfJdwSHsBAHaEK?pid=ImgDet&rs=1",
      name: "automotive"
    },
    {
      img: "https://th.bing.com/th/id/OIP._DwmOmL8HhkhFsfc3g84IQHaHa?pid=ImgDet&rs=1",
      name: "lighting"
    },


  ];

  const mensData = [
    {
      img: "https://th.bing.com/th/id/OIP.8MHsbDXaFtQaW_9x6JUUeAHaHa?pid=ImgDet&rs=1",
      name: "mens-shirts"
    },
    {
      img: "https://th.bing.com/th/id/OIP.YzqG7EEWQmKbZLY8dgsM5wHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "mens-shoes"
    },
    {
      img: "https://th.bing.com/th/id/OIP.mMftfnIiZ5skxGM-emCegQHaHa?pid=ImgDet&rs=1",
      name: "mens-watches"
    }

  ];

  function searchButtonHandler() {
    if (searchTerm.length !== 0) {
      navigate(`/search/${searchTerm}`);
    }

  }

  window.addEventListener('keypress', ({ key }) => {

    if (key === "Enter") {
      searchButtonHandler();
    }

  });


  // Mic Logic

  const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    alert("Your Brower Doesn't Provide ");
    return null;
  }


  useEffect(() => {
    let str = transcript;
    str = str.substring(0, str.length - 1)
    setSearchTerm(str);
  }, [transcript])




  return (
    <>
      {/* Free Shipping Header */}

      <div className={`relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 ` + (showShippingHeader ? " block" : " hidden")} >
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">Free Shipping on Every Order Above $100</strong>
          </p>
        </div>
        <div onClick={() => { setShowShippingHeader(false) }} className="flex flex-1 justify-end ">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </button>
        </div>
      </div >

      {/* Actual Navbar */}
      < nav className="flex items-center w-full relative h-[70px] px-10 border-b-[1px] border-[black]/[0.2] justify-between" >

        {/* Left Part Navbar */}
        < div className="flex items-center gap-14" >

          {/* Logog of website */}
          <Link Link to={"/"} className="font-lg font-bold cursor-pointer" >
            E - Kart
          </Link>

          {/* Navbar Features */}
          < div className={`flex font-semibold gap-5 items-center ` + (showSearchBar ? " hidden" : " block")
          }>

            {/* Mens */}
            < div className="group" >
              <div className="cursor-pointer group-hover:border-b-2 group-hover:border-blue-500 transition-all duration-200 ease-in-out">Mens</div>
              <div className="absolute left-0 border-y-2 py-10 px-5 border-[black]/[0.2] top-[47px] h-[500px] bg-white w-full group-hover:block hidden">
                {/* Data and links */}
                <div className='w-full flex justify-around items-start'>

                  {/* map function */}
                  {
                    mensData.map((item) => (

                      // Card
                      <Link to={`category/${item.name}`} key={item.name} className=' flex flex-col gap-5 w-[300px] h-[400px] cursor-pointer'>

                        <div className='w-full h-[80%]'>
                          <img src={item.img} className='rounded-xl w-full h-full hover:contrast-125 transition-all duration-200 ease-in-out' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2'>
                          <p className='font-bold text-xl'>{item.name}</p>
                          <p className='text-[black]/[0.6] font-bold text-lg'>Shop Now</p>
                        </div>

                      </Link>

                    ))
                  }



                </div>

              </div>
            </div >

            {/* womens */}
            < div className="group" >
              <div className="cursor-pointer group-hover:border-b-2 group-hover:border-blue-500 transition-all duration-200 ease-in-out">Womens</div>
              <div className="absolute left-0 border-y-2 py-10 px-5 border-[black]/[0.2] top-[47px] h-[500px] bg-white w-full group-hover:block hidden">
                {/* Data and links */}
                <div className='w-full flex justify-around items-start'>

                  {/* map function */}
                  {
                    womensData.map((item) => (

                      // Card
                      <Link to={`category/${item.name}`} key={item.name} className=' flex flex-col gap-5 w-[250px] h-[400px] cursor-pointer'>

                        <div className='w-full h-[80%]'>
                          <img src={item.img} className='rounded-xl w-full h-full hover:contrast-125 transition-all duration-200 ease-in-out' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2'>
                          <p className='font-bold text-xl'>{item.name}</p>
                          <p className='text-[black]/[0.6] font-bold text-lg'>Shop Now</p>
                        </div>

                      </Link>

                    ))
                  }



                </div>

              </div>
            </div >

            {/* others */}
            < div className="group" >
              <div className="cursor-pointer group-hover:border-b-2 group-hover:border-blue-500 transition-all duration-200 ease-in-out">Others</div>
              <div className="absolute left-0 border-y-2 py-10 px-5 border-[black]/[0.2] top-[47px] h-[600px] bg-white w-full group-hover:block hidden">
                {/* Data and links */}
                <div className='w-full grid grid-cols-6 gap-x-4 gap-y-20 justify-center items-start '>

                  {/* map function */}
                  {
                    othersData.map((item) => (

                      // Card
                      <Link to={`category/${item.name}`} key={item.name} className=' flex flex-col gap-5 w-[200px] h-[200px] cursor-pointer'>

                        <div className='w-full h-[80%]'>
                          <img src={item.img} className='rounded-xl w-full h-[170px] hover:contrast-125 transition-all duration-200 ease-in-out' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2'>
                          <p className='font-bold text-xl'>{item.name}</p>
                          <p className='text-[black]/[0.6] font-bold text-lg'>Shop Now</p>
                        </div>

                      </Link>

                    ))
                  }



                </div>

              </div>
            </div >

            {/* About */}
            < Link to={"/about"} className='cursor-pointer' >
              About
            </Link >

          </div >
        </div >

        {/* input Field - Search Bar */}
        < div className={`flex justify-center relative items-center gap-5 ` + (showSearchBar ? " block" : " hidden")
        }>

          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>

          {/* Cancel or remove icon */}
          <div onClick={() => { setShowSearchBar(false) }} className=' cursor-pointer absolute z-10 -top-2 -left-2'>
            <CancelIcon />
          </div>

          {/* Input Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-[600px] outline-none p-3 font-semibold pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
            />
          </div>

          {/* Search Button */}
          <div onClick={searchButtonHandler} className='cursor-pointer '>
            <div className='px-5 py-[10px] hover:font-bold hover:shadow-lg transition-all duration-300 ease-in-out hover:shadow-[black]/[0.3] bg-blue-500 font-semibold text-white rounded-md'>Search</div>
          </div>

          {/* Microphone */}
          <div>

            {/* Mic Button */}
            <div onClick={() => {
              SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
              setShowMic(false);
            }} className={`p-2 hover:bg-[black]/[0.2] transition-all duration-200 ease-in-out cursor-pointer rounded-full ` + (showMic ? " block" : " hidden")}>
              <MicIcon fontSize='large' />
            </div>

            {/* Croxx Button */}
            <div onClick={() => {
              SpeechRecognition.stopListening();
              resetTranscript();
              searchButtonHandler();
              setShowMic(true);
            }} className={`p-2 hover:bg-[black]/[0.2] transition-all duration-200 ease-in-out cursor-pointer rounded-full ` + (!showMic ? " block" : " hidden")}>
              <ClearOutlinedIcon fontSize='large' />
            </div>

          </div>

        </div >

        {/* Right part Navbar */}

        <div className="flex items-center gap-10" >

          {/* Login and SignUp Button Button */}
          <div className={`` + (login ? " hidden" : " block")} >
            <Stack spacing={2} direction="row">
              <Link to={"/login"}>
                <Button variant="contained">Sign In</Button>
              </Link>

              <Link to={"/signup"}>
                <Button variant="outlined">Sign Up</Button>
              </Link>
            </Stack>
          </div>

          {/* Language Options */}
          <div className='flex justify-center items-center'>
            <div id="myId" className=' flex'>
            </div>
          </div >

          {/* Navbar Bar Features */}
          < div className="flex gap-5 items-center" >

            <div onClick={() => { setShowSearchBar(true) }} className={`cursor-pointer hover:bg-[black]/[0.1] transition-all duration-200 ease-in-out p-3 rounded-full ` + (!showSearchBar ? " block" : " hidden")}>
              <SearchTwoToneIcon fontSize='medium' />
            </div>

            {/* WishList Icon */}
            <Link to={"/wishlist"} className={`cursor-pointer relative` + (login ? " block" : " hidden")}>
              <div className={`absolute z-10   bottom-4 font-semibold h-[20px] w-[20px] flex justify-center items-center rounded-full text-white bg-blue-400 ` + (wishListItems.length > 0 ? " block" : " hidden")} >
                <p>{wishListItems.length}</p>
              </div>
              <FavoriteBorderIcon />
            </Link>

            {/* Cart Icon */}
            <Link to={"/cart"} className={`cursor-pointer relative` + (login ? " block" : " hidden")}>
              <div className={`absolute z-10   bottom-4 font-semibold h-[20px] w-[20px] animate-bounce flex justify-center items-center rounded-full text-white bg-red-700 ` + (cartItems.length > 0 ? " block" : " hidden")} >
                <p>{cartItems.length}</p>
              </div>
              <ShoppingCartIcon fontSize='medium' />
            </Link>

            {/* Profile Icon */}
            <div className={`cursor-pointer px-5 ` + (login ? " block" : " hidden")}>
              <PersonIcon fontSize='large' />
            </div>

          </div >

        </div>

      </nav >
    </>

  );
}
export default Navbar;