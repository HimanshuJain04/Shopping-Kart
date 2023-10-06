import React from 'react';
import { useState, useEffect } from 'react';
import FetchDataFromApi from '../Api/FetchDataFromApi';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context';
import CardItem from '../components/CardItem';
import Loader from '../components/Loader';
import ErrorPage from '../components/ErrorPage';
import { useMemo } from 'react';


function CategoryPage() {

  const { setLoading, loading, error, setError } = useContext(Context);

  const { pathname } = useLocation();
  const category = pathname.split("/").at(-1);
  const search = pathname.split("/").at(-2);
  const [data, setData] = useState(null);
  let url = `products/category/${category}`;
  const [rangeValue, setRangeValue] = useState(10000);


  if (category === "All-Products") {
    url = "products?skip=0&limit=100";
  }

  if (search === "search") {
    url = `products/search?q=${category}`;
  }

  function apiCalling() {

    setLoading(true);

    FetchDataFromApi(url).then((res) => {
      setData(res?.data?.products);
      setError(false);

    }).catch((err) => {

      setError(true);
      setData([]);
      console.log("Error when Category Page");
      console.log(err);

    });

    setLoading(false);

  }

  useEffect(() => {
    apiCalling();
  }, [category]);

  // Dropdown code
  const [sortDir, setSortDir] = useState("");

  useEffect(() => {

    let sort = [];

    const extraData = data && [...data];

    if (sortDir === "Pricelowtohigh") {

      sort = extraData.sort((a, b) => a.price - b.price);

    } else if (sortDir === "Pricehightolow") {

      sort = extraData.sort((a, b) => b.price - a.price);

    } else if (sortDir === "Ratinglowtohigh") {

      sort = extraData.sort((a, b) => a.rating - b.rating);

    } else if (sortDir === "Ratinghightolow") {

      sort = extraData.sort((a, b) => b.rating - a.rating);

    } else {
      apiCalling();
    }
    setData(sort);

  }, [sortDir])

  // Price Range 
  useEffect(() => {
    console.log("range");
    if (data) {
      apiCalling();
      setData(data.filter((item) => item.price <= rangeValue));
    }
  }, [rangeValue]);

  return (

    <div className='flex flex-col min-h-screen w-full pt-10 pb-20 bg-[white]'>
      {
        loading ? (<Loader />) : (
          error ? (<ErrorPage />) : (
            <>

              {/* Heading */}
              <div className=''>
                <h4 className='mx-10 my-5 text-2xl font-bold'>{`${category?.toUpperCase()}`} : </h4>
              </div>

              {/* Sorting Filter */}
              <div className=' w-full flex gap-10 justify-end items-center px-20'>

                {/* Price Range */}
                <div>
                  <div>
                    <label htmlFor='range'>{rangeValue}</label>
                    <input type='range' id='range' defaultValue={10000} min={0} max={10000} onChange={(event) => { setRangeValue(event.target.value) }} />
                  </div>
                </div>

                {/* Sorting */}
                <div>
                  <div className='border-2 rounded-lg border-[black]/[0.5] px-2 py-1'>
                    <select className='outline-none' onChange={(e) => setSortDir(e.target.value)}>
                      <option value="sort">Sort</option>
                      <option value="Pricelowtohigh">Price : Low to High</option>
                      <option value="Pricehightolow">Price : High to Low</option>
                      <option value="Ratinglowtohigh">Rating : Low to High</option>
                      <option value="Ratinghightolow">Rating : High to Low</option>
                    </select>
                  </div>
                </div>




              </div>

              {/* Data */}
              <div className="grid flex-wrap px-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-10 gap-y-4">
                {
                  data?.length === 0 ? (<div className='font-bold text-3xl'>No Data Found</div>) :
                    (
                      data?.map((item, index) => {
                        return <CardItem item={item} key={index} ></CardItem>
                      })
                    )
                }
              </div>

            </>

          )
        )
      }

    </div>
  )
}

export default CategoryPage;
