import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function HomeFinalStock() {
    return (
        // Main div
        <div className='w-full px-10 h-[700px] bg-white flex justify-center items-end'>

            {/* Purple div */}
            <div className='w-full bg-[rgb(31,41,55)] mb-24 h-[500px] flex justify-between items-center'>
                {/* left div */}
                <div className=' flex flex-col text-white  w-[400px] ml-20'>
                    <p className='text-5xl font-bold'>Final Stock.</p>
                    <p className='text-5xl font-bold'>Up to 50% off.</p>
                    <p className="mt-10 font-semibold text-lg cursor-pointer">Shop the sale <ArrowForwardIcon /></p>
                </div>
                {/* Right div */}
                <div className='flex justify-center items-center relative gap-5'>
                    <div className='h-[500px] p-5'>
                        <img className='h-full rounded-xl' src="https://1.bp.blogspot.com/-5kToYqlrAa4/UZoIUegWG2I/AAAAAAAAGrY/RBpLN5gsPMY/s640/beautiful+female+dresses,+beautiful+women+dresses,+women+dresses,+tall+women+dresses,+female+dresses,+female+dresses,+female+clergy+dresses,++(13).jpg" />
                    </div>
                    <div className='flex flex-col gap-5 py-5 pr-5'>
                        <img className='rounded-xl h-[300px]' src="https://th.bing.com/th/id/OIP.uoNWQ0nEWRLou43q9JqQZgHaJ4?pid=ImgDet&rs=1" />
                        <img className=' h-[300px] rounded-xl ' src="https://th.bing.com/th/id/OIP.iRYadvCQyjTmw8R_3p1ArgHaLH?pid=ImgDet&rs=1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFinalStock