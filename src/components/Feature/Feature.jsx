import React from 'react';

const Feature = ({ feature }) => {
    const { id, logo, name, title, type1, type2, address, salary } = feature;
    return (
        <div className='border-2 border-gray-400 p-6 rounded-lg'>
            <img className='w-32 mb-5' src={logo} alt="" />
            <h2 className='font-bold text-2xl text-gray-700'>{title}</h2>
            <p className='font-bold text-xl text-gray-500 my-4'>{name}</p>
            <div className='flex gap-2 mb-3'>
                <p className='border-2 border-purple-400 py-2 px-4 rounded text-purple-500'>{type1}</p>
                <p className='border-2 border-purple-400 py-2 px-4 rounded text-purple-500'>{type2}</p>
            </div>
            <div>
                <p>{address}</p>
                <p>{salary}</p>
            </div>
            <button>View Details</button>
        </div>
    );
};

export default Feature;