import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductDetail({ item }) {

  const [currImage, setcurrImage] = useState(0);

  const { handleAddToCart, handleRemoveFromCart, cartItems, wishListItems, handleWishList } = useContext(Context);

  const [productQuantity, setProductQuantity] = useState(0);

  const [wishlistFlag, setWishlistFlag] = useState(false);

  const [cartFlag, setCartFlag] = useState(false);

  const [cartWalaItem, setCartWalaItem] = useState([]);

  function addHandler() {
    handleAddToCart(item);
    setProductQuantity(productQuantity + 1);
  }

  function counterDescreaseHandler() {
    handleRemoveFromCart(item);
    setProductQuantity(productQuantity - 1);
  }

  function cartFlagHandler() {

    setCartFlag(false);
    cartItems.forEach((element) => {

      if (element?.id === item?.id) {
        setCartWalaItem(element);
        setCartFlag(true);
        return;
      }
    });
  }

  useEffect(() => {
    cartFlagHandler();
  }, [cartItems]);


  function wishListFlagHandler() {
    setWishlistFlag(false);
    wishListItems.forEach((element) => {

      if (element?.id === item?.id) {
        setWishlistFlag(true);
        return;
      }
    });
  }

  useEffect(() => {
    wishListFlagHandler();
  }, [wishListItems]);

  console.log(cartWalaItem);



  // one formula is: Original price = Sale price / (1 - Discount percentage / 100). Another formula is: Original price = Sale price x 100 / (100 - Discount percentage)1.

  return (
    <div className="flex flex-col w-full gap-10 p-5 lg:gap-5 lg:flex-row">

      {/* left part */}
      <div className="flex flex-col-reverse items-center justify-center md:flex-row">
        {/* small multipleIMages */}
        <div className="flex flex-row md:flex-col md:h-[600px] h-[60px] p-1 xsm:h-[80px] overflow-x-scroll md:overflow-y-scroll ">
          {item?.images?.map((image, index) => (
            <div
              key={index}
              className="max-w-[60px] flex justify-center items-center max-h-[60px] xsm:max-w-[75px] bg-cover cursor-pointer border-2 py-2 px-1 hover:border-blue-700 hover:border-2 transition-all duration-150"
              onClick={() => {
                setcurrImage(index);
              }}
            >
              <img
                src={image}
                className="max-w-[60px] object-cover"
                alt={`images-${index}`}
              />
            </div>
          ))}
        </div>

        {/* Big image */}
        <div className="sm:w-[500px] xsm:w-[400px] xsm:h-[400px] sm:h-[600px] h-[300px] w-[300px] flex justify-center items-center border">
          <img
            src={item.images[currImage]}
            className="bg-cover sm:max-w-[490px] sm:max-h-[590px] xsm:max-w-[390px] xsm:max-h-[390px] max-w-[290px] max-h-[290px]   md::hover:scale-125 transition-all duration-500"
            alt="Image"
          />
        </div>
      </div>

      {/* right part */}
      <div className="flex flex-col items-center justify-center w-full p-10 border-t-2 lg:border-t-0 sm:justify-start sm:items-start lg:p-2 ">

        <p className="text-base font-semibold text-[#707070]">{item?.brand}</p>
        <p className="mt-1 text-2xl font-semibold">{item?.title}</p>

        <div className="flex items-center justify-center gap-5 mt-3">
          <p className="text-3xl font-semibold">${item.price}</p>

          <div className="flex flex-col items-center justify-center xl:gap-5 xl:flex-row">
            <p className="line-through font-semibold text-[#6c6b6b] ">
              ${" "}
              {((item.price * 100) / (100 - item.discountPercentage)).toFixed(
                2
              )}
            </p>
            <p className="text-[brown] font-semibold">
              {item?.discountPercentage}% off
            </p>
          </div>
        </div>

        <br />

        <p className="text-lg font-semi-bold flex gap-2 items-center justify-center">
          <p>{item.rating}</p>
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating
              name="text-feedback"
              value={item?.rating ? item?.rating : 0}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
          </Box>
        </p>

        {/* counter */}
        {cartFlag ? (

          <div className="flex flex-col items-center justify-center gap-5 my-5">
            <div className="flex items-center justify-center gap-3 px-3 py-1 border-2">

              <button
                className="pr-3 text-2xl font-bold border-r-2 border-black"
                onClick={counterDescreaseHandler}
              >
                -
              </button>
              <div className="px-2 text-xl">{cartWalaItem?.quantity}</div>
              <button
                className="pl-3 text-2xl font-bold border-l-2 border-black"
                onClick={addHandler}
              >
                +
              </button>
            </div>

            <Link
              to="/cart"
              className="px-5 py-2 text-lg  flex gap-2 items-center justify-center font-semibold text-white bg-blue-600 rounded-sm"
            >
              <button>Go to Cart</button>
            </Link>
          </div>
        ) : (
          <button
            className="px-5 py-2 my-5 text-lg flex gap-2 items-center justify-center font-semibold text-white bg-blue-600 rounded-sm"
            onClick={addHandler}
          >
            <p> Add to Cart</p>
            <ShoppingCartIcon />

          </button>

        )}

        {/* Wishlist button */}
        <button
          onClick={() => { handleWishList(item); }}
          className="px-5 py-2 my-5 text-lg font-semibold text-white bg-blue-600 rounded-md"

        >
          <p >
            {
              wishlistFlag ? ("Remove from wishlist") : ("Add to wishlist")
            }
          </p>

        </button>

        <div className="flex flex-col gap-3 px-4 py-4 bg-blue-100 rounded-md">
          <p className="text-base font-semibold text-gray-800">
            Description :{" "}
          </p>
          <p className="font-semibold text-gray-500">{item?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
