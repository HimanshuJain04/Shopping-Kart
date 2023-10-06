import React, { useContext } from "react";
import { useState } from "react";
import HomeMainCarousel from "../components/HomeMainCarousel";
import CardTemplete from "../components/CardTemplete";
import freeShipping from "../assets/free-delivery.png";
import customerService from "../assets/customer-service.png";
import easyReturn from "../assets/product-return.png";
import securePayment from "../assets/secure-payment.png";
import HomeCatCarousel from "../components/HomeCatCarousel";
import OverView from "../components/OverView";
import { Context } from "../Context";
import { Footer } from "../components/Footer";
import HomeFinalStock from "../components/HomeFinalStock";

function HomePage() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const { quickView } = useContext(Context)

  setTimeout(() => {
    if (sliderIndex === 5) {
      setSliderIndex(0);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  }, 5000);

  return (

    <div className="min-h-screen relative w-full">

      {/* carousel slider */}
      <div className="py-2">
        <HomeMainCarousel />
      </div>

      {/* cards */}
      <div className=" flex w-full mt-10 bg-[black]/[0.02] py-10 items-center justify-around">
        <CardTemplete heading={"Free Delivery"} img={freeShipping} desc={"Get free delivery for every order above $100"} ></CardTemplete>
        <CardTemplete heading={"Support Customer"} img={customerService} desc={"Dedicated support anytime and anywhere"} ></CardTemplete>
        <CardTemplete heading={"Secure Payment"} img={securePayment} desc={"100% secure payment. Get easy support anytime"} ></CardTemplete>
        <CardTemplete heading={"Easy Return"} img={easyReturn} desc={"Return within 10 days of receiving your order"} ></CardTemplete>
      </div>

      {/* Home Final Stock */}

      <div className="w-full">
        <HomeFinalStock></HomeFinalStock>
      </div>

      {/* Home cat carousel */}
      <div>
        <HomeCatCarousel></HomeCatCarousel>
      </div>

      {/* Overview */}
      <div className={`w-full h-screen flex pt-20 justify-center items-center fixed top-0 bottom-0 backdrop-blur-md z-100 bg-[black]/[0.3] ` + (quickView ? " block" : " hidden")}>
        <OverView></OverView>
      </div>


      {/* Footer */}
      <div className="border-t-2 mt-20 border-[black]/[0.1]">
        <Footer />
      </div>

    </div >
  );
}

export default HomePage;
