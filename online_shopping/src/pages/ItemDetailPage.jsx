import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FetchDataFromApi from "../Api/FetchDataFromApi";
import Loader from "../components/Loader";
import ProductDetail from "../components/ProductDetail";

function ItemDetailPage() {
  const { pathname } = useLocation();

  const [currData, setCurrData] = useState(null);

  useEffect(() => {
    FetchDataFromApi(pathname.slice(1))
      .then((res) => {
        setCurrData(res.data);
      })
      .catch((err) => {
        setCurrData(null);
        console.log("Error when itemDetaal api");
        console.log(err);
      });
  }, []);

  

  return (
    
    <div className="bg-[rgb(240,239,239)] w-full pb-20 flex min-h-screen pt-10">
      {/* product details */}
      <div className="bg-[white] mx-2 xsm:mx-8 md:mx-20 w-full">
        {currData === null ? (
          <div className="flex items-center justify-center w-full h-full">
            <Loader></Loader>
          </div>
        ) : (
          <ProductDetail item={currData}></ProductDetail>
        )}
      </div>
    </div>
  );
}

export default ItemDetailPage;
