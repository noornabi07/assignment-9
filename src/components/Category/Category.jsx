import React from 'react';

const Category = ({category}) => {
    const {picture, name, job_quantity} = category;
    return (
        <div className='mt-12 bg-purple-50 p-4'>
            <img className='mx-auto mb-5 w-16' src={picture} alt="" />
            <p className='font-bold text-xl'>{name}</p>
            <p className='font-semibold text-lg text-gray-500'>{job_quantity} Jobs Available</p>
        </div>
    );
};

export default Category;