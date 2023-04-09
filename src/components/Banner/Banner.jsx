import React from 'react';
import img from '../../../public/banner-cover.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center px-20 bg-gray-100'>
            <div>
                <p className='font-bold text-7xl '>One Step</p>
                <p className='font-bold text-7xl my-3'>Closer To Your</p>
                <p className='font-bold text-7xl text-purple-400'>Dream Job</p>
                <p className='mt-5 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Start</button>
            </div>
            <img className='w-2/4' src={img} alt="" />
        </div>
    );
};

export default Banner;