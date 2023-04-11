import React, { createContext, useEffect, useState } from 'react';
import img from '../../../public/banner-cover.png'
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';


const Banner = () => {
    // Categories data fetch
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('categorie-data.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    // features data part here
    const [jobs, setJobs] = useState([])
    const [totalJob, setTotalJob] = useState([])
    
    const features = useLoaderData()

    useEffect( () =>{
        const forJobs = features.slice(0, 4);
        setJobs(forJobs)

    }, [totalJob])

    const seeAllBtn =() =>{
        setJobs(totalJob)
        setTotalJob(features)
        
    }

    return (
        <div>
            {/* Banner section */}
            <div className='md:flex justify-between items-center px-3 md:px-20 bg-gray-100'>
                <div>
                    <p className='font-bold text-3xl md:text-7xl '>One Step</p>
                    <p className='font-bold text-3xl md:text-7xl my-3'>Closer To Your</p>
                    <p className='font-bold text-3xl md:text-7xl text-purple-500'>Dream Job</p>
                    <p className='mt-5 text-lg text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-purple-500 py-2 px-8 rounded-lg mt-4 text-white text-xl'>Get Start</button>
                </div>
                <img className='md:w-2/4' src={img} alt="" />
            </div>

            {/* Job Category section */}
            <div className='text-center mt-20 px-3 md:px-20 mb-10'>
                <h2 className='font-bold text-4xl mb-8'>Job Category List</h2>
                <p className='font-semibol text-lg text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-4 gap-4'>
                    {
                        category.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>

            {/* Feature section */}
            <div className='mt-20 md:px-20 px-3'>
                <div className='text-center mb-16'>
                    <h2 className='font-bold text-4xl mb-4'>Featured Jobs</h2>
                    <p className='font-semibol text-lg text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    {
                        jobs.map(feature => <Feature
                            key={feature.id}
                            feature={feature}
                        ></Feature>)
                    }
                </div>

                <div className='text-center py-6'>
                    <button onClick={() => seeAllBtn(jobs)} className='mt-4 hover:bg-purple-600 bg-purple-500 py-3 px-4 font-bold text-white rounded'>See All Jobs</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;