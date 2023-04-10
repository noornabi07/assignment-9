import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Feature = ({ feature }) => {
    const { id, logo, name, title, type1, type2, address, salary } = feature;
    return (
        <div className='border-2 border-gray-400 p-6 rounded-lg'>
            <img className='w-32 mb-5' src={logo} alt="" />
            <h2 className='font-bold text-2xl text-gray-700'>{title}</h2>
            <p className='font-bold text-xl text-gray-500 my-4'>{name}</p>
            <div className='flex gap-2 mb-3'>
                <p className='border-2 border-purple-400 font-bold py-2 px-4 rounded text-purple-500'>{type1}</p>
                <p className='border-2 border-purple-400 font-bold py-2 px-4 rounded text-purple-500'>{type2}</p>
            </div>
            <div className='flex gap-8'>
                <div className='flex items-center'>
                    <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faLocationDot} />
                    <p className='font-semibold text-xl text-gray-500'>{address}</p>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faCircleDollarToSlot} />
                    <p className='font-semibold text-xl text-gray-500'>{salary}</p>
                </div>
            </div>
            <Link to={`/${id}`}>
                <button className='mt-4 hover:bg-purple-600 bg-purple-500 py-2 px-4 font-bold text-white rounded'>View Details</button>
            </Link>
        </div>
    );
};

export default Feature;