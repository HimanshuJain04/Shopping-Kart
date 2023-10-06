import React, { useState, useEffect } from "react";
import FetchDataFromApi from "../Api/FetchDataFromApi";
import { useContext } from "react";
import { Context } from "../Context";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardAndPreview from "./CardAndPreview";

// to create the single small carousel
// empty when swipe to left then right side empty infinte krna hai

function HomeCategoryItems({ category }) {

  const { setLoading, setError } = useContext(Context);

  const [allData, setAllData] = useState([]);

  const url = `products/category/${category}?skip=0&limit=5`;

  useEffect(() => {

    setLoading(true);

    FetchDataFromApi(url)
      .then((res) => {

        setAllData(res.data.products);

      }).catch((err) => {

        setError(true);
        setAllData([]);
        console.log(err);
        console.log("error in getting home category items");

      });

    setLoading(false);

  }, []);

  return (

    <div className=" flex  mt-10 w-full px-10 ">
      {
        allData && (

          <div className=" flex gap-5  items-start justify-center  w-full flex-col  bg-[black]/[0.03] p-5">

            <p className="font-bold text-2xl">{`BEST OF ${category.toUpperCase()}`}</p>
            <Carousel
              additionalTransfrom={0}
              arrows
              infinite
              centerMode={false}
              className="flex justify-center w-full items-center"
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 4,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >

              {
                allData && allData.map((item) => (
                  <CardAndPreview item={item} key={item.id}></CardAndPreview>

                ))
              }

            </Carousel>
          </div>
        )
      }




    </div>
  );
}

export default HomeCategoryItems;
