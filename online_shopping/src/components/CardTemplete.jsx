import React from 'react';

// this is a home page features cards like return,support privacy etc

function CardTemplete(props) {
    const heading = props.heading;
    const desc = props.desc;
    const img = props.img;

    return (
        <div className='flex border-[1px] bg-[white]/[0.8] hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg rounded-lg border-[black]/[0.2] px-10  flex-col w-[300px] h-[250px]  items-center justify-center'>
            
            <div>
                <img src={img} className=' h-[100px]' />
            </div>
            
            <div className='flex justify-center items-center flex-col'>
                {/* Heading */}
                <p className='font-bold text-lg text-center'>{heading}</p>
                {/* Desc */}
                <p className='font-sm text-center text-[black]/[0.4] font-semibold'>{desc}</p>
            </div>

        </div>
    )
}

export default CardTemplete