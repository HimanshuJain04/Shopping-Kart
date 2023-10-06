import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Link, useNavigate } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';

function OverView() {

    const { quickViewData, setQuickView, cartItems, handleAddToCart } = useContext(Context);
    const [cartButton, setCartButton] = useState(false);
    const navigate = useNavigate();


    function cartFlagHandler() {

        setCartButton(false);
        cartItems.forEach((element) => {

            if (element?.id === quickViewData.id) {
                setCartButton(true);
                return;
            }
        });
    }

    useEffect(() => {
        cartFlagHandler();
    }, [cartItems]);

    return (
        <div className='bg-white w-[60vw] z-20 max-h-[80vh] py-10 p-5 flex justify-center items-start'>
            {
                quickViewData && (
                    <>
                        {/* Left for image */}
                        <div className='w-[50%] bg-gray-200 flex justify-center items-center'>
                            <img src={quickViewData?.thumbnail} className='w-full max-h-[70vh]' />
                        </div>

                        {/* Right for data / details */}
                        <div className='w-[50%] h-full gap-10 px-8 flex flex-col justify-between '>

                            <div className='flex flex-col gap-10'>

                                <div className='flex gap-5 flex-col'>

                                    {/* heading and exit button */}
                                    <div onClick={() => { setQuickView(false) }} className='flex justify-end cursor-pointer items-center '>
                                        <CloseIcon fontSize='large'></CloseIcon>
                                    </div>
                                    <div className='flex justify-between items-center '>
                                        <p className='text-4xl font-bold'>{quickViewData?.title}</p>
                                    </div>
                                    {/* price */}
                                    <div className='font-semibold text-2xl'>${quickViewData?.price}</div>
                                </div>

                                <div className=''>
                                    <Box
                                        sx={{
                                            width: 200,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="text-feedback"
                                            value={quickViewData?.rating ? quickViewData?.rating : 0}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                    </Box>

                                </div>

                            </div>

                            <div className='flex flex-col gap-10'>

                                {
                                    cartButton ? (
                                        <div onClick={() => { navigate("/cart") }} className={`w-full bg-blue-400 flex gap-5 justify-center items-center text-white py-3 font-bold cursor-pointer rounded-lg text-center `}>
                                            <p>Go to cart</p>
                                            <LocalMallIcon />
                                        </div>
                                    ) : (
                                        <div onClick={() => { handleAddToCart(quickViewData); }} className={`w-full bg-blue-400 flex gap-5 justify-center items-center text-white py-3 font-bold cursor-pointer rounded-lg text-center `}>
                                            <p>Add to cart</p>
                                            <AddShoppingCartIcon />
                                        </div>

                                    )
                                }


                                <Link to={`product/${quickViewData?.id}`} className='text-blue-500 font-semibold hover:text-blue-900 transition-all duration-200 ease-in-out text-center cursor-pointer'>More Details</Link>
                            </div>

                        </div>
                    </>
                )
            }


        </div>
    )
}

export default OverView