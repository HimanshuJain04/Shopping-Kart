import React, { useContext } from 'react'
import { Context } from '../Context';
import CardItem from '../components/CardItem';

function WishlistPage() {
    const { wishListItems } = useContext(Context);

    return (
        <div className='flex flex-col min-h-screen w-full pt-10 pb-20 bg-[white]'>

            <h4 className='mx-10 my-5 text-2xl font-bold'>WISHLIST</h4>

            {
                wishListItems?.length === 0 ? (<div className='font-bold w-full h-[500px] flex justify-center items-center text-3xl'><p>WishList Is Empty</p></div>) :
                    (
                        <div className="grid flex-wrap px-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-10 gap-y-4">
                            {
                                wishListItems?.map((item, index) => {
                                    return <CardItem item={item} key={index} ></CardItem>
                                })
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default WishlistPage;