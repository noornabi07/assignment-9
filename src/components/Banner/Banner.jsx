import React from 'react';
import img from '../../../public/banner-cover.png'
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Banner = () => {
    const categories = useLoaderData();
    // console.log(categories)
    return (
        <div>
            {/* Banner section */}
            <div className='flex justify-between items-center px-20 bg-gray-100'>
                <div>
                    <p className='font-bold text-7xl '>One Step</p>
                    <p className='font-bold text-7xl my-3'>Closer To Your</p>
                    <p className='font-bold text-7xl text-purple-500'>Dream Job</p>
                    <p className='mt-5 text-lg text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-purple-500 py-2 px-8 rounded-lg mt-4 text-white text-xl'>Get Start</button>
                </div>
                <img className='w-2/4' src={img} alt="" />
            </div>

            {/* Job Category section */}
            <div className='text-center mt-20 px-20 mb-10'>
                <h2 className='font-bold text-4xl mb-8'>Job Category List</h2>
                <p className='font-semibol text-lg text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Banner;