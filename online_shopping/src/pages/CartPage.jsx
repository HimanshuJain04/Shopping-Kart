import CartDetails from "../components/CartDetails";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

function CartPage() {

  const { cartItems, totalAmount } = useContext(Context);

  return (
    <div className="w-full min-h-screen py-5 bg-[rgb(240,239,239)] relative">
      {/* Cart Is Empty */}
      {cartItems?.length === 0 ? (
        <div className="relative flex items-center justify-center w-full h-[84vh] ">
          <img
            src="src/assets/R.png"
            alt="cart-is-empty"
            className="bg-cover w-[full] max-h-[80vh]"
          />
          <div className="absolute bottom-[10%]  sm:top-[60%] left-[51%] translate-y-[-50%] translate-x-[-50%]">
            <Link
              to="/category/All-Products"
              className="px-7 sm:text-lg sm:px-10 text-base py-3 hover:text-black transition-all duration-300  border-2 font-semibold rounded-md bg-[#ed2828] text-white  z-[10] border-[black]/[0.2]"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      ) :


        // Cart IS Not Empty


        (
          (
            <div className="flex flex-col items-center h-full gap-5 mx-5 mt-10 mb-20 sm:mx-20 xl:flex-row ">
              {/* left part */}
              <div className="flex flex-col w-full bg-white">
                <div className="flex items-center justify-start mx-10">
                  <h3 className="my-5 text-xl font-semibold">
                    My Cart ({cartItems.length})
                  </h3>
                </div>

                <div className="h-[1px] w-full bg-[black]/[0.2] mb-5"></div>

                <div className="flex flex-col gap-5 ">
                  {cartItems?.map((item, index) => (
                    <CartDetails item={item} key={index}></CartDetails>
                  ))}
                </div>

                <div className="h-[1px] w-full bg-[black]/[0.15] mt-5"></div>

                <div className="flex flex-col items-center justify-end w-full gap-5 px-10 py-5 shadow-xl sm:flex-row">
                  <Link
                    to="/category/All-Products"
                    className=" px-3 sm:px-8 py-3 text-sm sm:text-lg text-center font-semibold border-2 border-[black]/[0.2] rounded-md "
                  > CONTINUE SHOPPING
                  </Link>
                  <Link to={"/checkout"} className="px-8 py-3 text-base font-semibold text-center text-white bg-orange-500 border rounded-md sm:px-16 sm:text-lg">
                    PLACE ORDER
                  </Link>
                </div>
              </div>

              {/* Right-part */}

              <div className="flex  flex-col px-5 w-full xl:w-[500px] sticky top-20 bg-white">
                <p className="py-5 text-xl font-semibold text-[gray]">
                  PRICE DETAILS{" "}
                </p>

                <div className="h-[1px] w-full bg-[black]/[0.3]"></div>

                <div className="flex flex-col w-full gap-3 py-5">
                  <div className="flex items-center justify-between font-semibold">
                    <p>Price </p>
                    <p>${totalAmount}</p>
                  </div>

                  <div className="flex items-center justify-between font-semibold">
                    <p>Delivery Charge </p>
                    <p>Free</p>
                  </div>

                  <div className="w-full border-t-2 my-5 border-[black]/[0.3] border-dashed"></div>

                  <div className="flex items-center justify-between font-bold">
                    <p>Amount Payable</p>
                    <p>${totalAmount}</p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-[black]/[0.2]"></div>

                <p className="py-5 text-[brown] font-semibold">
                  Your Total Saving on this order $5000{" "}
                </p>
              </div>
            </div>
          )
        )}
    </div>
  );
}

export default CartPage;
