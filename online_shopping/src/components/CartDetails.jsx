import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

function CartDetails({ item }) {

  const {handleAddToCart,handleRemoveFromCart,handleAllRemoveFromCart} = useContext(Context);

  return (
    
  <div className="flex flex-col items-center justify-start w-full gap-10 px-3 py-5 mx-3 my-3 border-b-2 sm:mx-10 sm:flex-row">

    <Link className="h-[180px] w-[220px] flex items-center sm:items-start justify-center" to={`/products/${item.id}`}>
      <img src={item?.thumbnail} alt="thumbnail" className="h-full bg-cover" />
    </Link>
    
    <div className="flex flex-col items-center justify-center gap-5 sm:items-start">
    
        <div className="flex flex-col items-center gap-2 mt-3 sm:items-start">
        
          <Link to={`/products/${item.id}`} className="text-lg font-semibold">{item?.title}</Link>
          
          <p className="hidden sm:block text-[#9a9999] text-sm font-semibold ">{`${item?.description?.slice(0, 50)}...`}</p>
          
          <div className="flex flex-col items-center gap-3 xsm:flex-row">
          
            <p className="text-3xl font-bold">${item.price}</p>

            <div className="flex flex-col md:gap-3 md:flex-row">
              <p className="line-through font-semibold text-[#6c6b6b] ">
                $ {((item.price * 100) / (100 - item.discountPercentage)).toFixed(2)}
              </p>
              <p className="text-[brown] font-semibold">{item?.discountPercentage }% off</p>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col items-center justify-between w-full gap-3 sm:items-start md:flex-row">

          {/* counter */}
            <div className="flex items-center justify-center gap-3 px-3 py-1 border-2">
              <button className="pr-3 text-2xl font-bold border-r-2 border-black" onClick={()=> handleRemoveFromCart(item)} >-</button>
              <div className="px-2 text-xl">{item?.quantity}</div>
              <button className="pl-3 text-2xl font-bold border-l-2 border-black" onClick={()=> handleAddToCart(item)} >+</button>
            </div>

          <p className="text-base font-semibold">${item?.price} x {item?.quantity} = ${item?.quantity * item?.price}</p>
          
        </div>
        
        <div>
          <button onClick={()=>handleAllRemoveFromCart(item)} className="text-red-500 cursor-pointer hover:underline" >Remove</button>
        </div>
        
    </div>
      
  </div>

  );
}

export default CartDetails;
