import React, { useContext, useEffect } from 'react';
import HomeCategoryItems from './HomeCategoryItems';
import { Context } from '../Context';

// define how many carousel and pass their data like trending, sales etc

function HomeCatCarousel() {
    const { allData } = useContext(Context);

    useEffect(() => {

        // console.log(allData.filter((item) => item.discountPercentage > 20));
    }, [])

    return (
        <div className=''>
            <HomeCategoryItems category={"womens-dresses"}></HomeCategoryItems>
            <HomeCategoryItems category={"smartphones"}></HomeCategoryItems>
            <HomeCategoryItems category={"fragrances"}></HomeCategoryItems>
            <HomeCategoryItems category={"furniture"}></HomeCategoryItems>

        </div>
    )
}

export default HomeCatCarousel;

