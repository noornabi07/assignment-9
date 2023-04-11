import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobApplied from '../JobApplied/JobApplied';

const Applied = () => {
    const newArrayJob = useLoaderData()

    const [filterOption, setFilterOption] = useState('all');
    const filterJobDetails = newArrayJob.filter(detail => {
        if (filterOption === 'all') {
            return true;
        }
        else if (filterOption === 'Remote') {
            return detail.type1 === 'Remote'
        } else if (filterOption === 'Onsite') {
            return detail.type1 === 'Onsite'
        }
    })

    return (
        <div>
            <div className='bg-gray-300 py-10 pb-15'>
                <h2 className='mt-20 text-center font-bold text-3xl'>Applied Jobs</h2>
            </div>
            <div className='mt-20 px-40'>
                <div>
                    <button onClick={() => setFilterOption('Remote')} className='py-2 px-4 bg-purple-500 rounded font-bold text-white'>Remote Jobs</button>
                    <button onClick={() => setFilterOption('Onsite')} className='py-2 px-4 bg-purple-500 rounded font-bold text-white mx-3'>Onsite Jobs</button>
                    <button onClick={() => setFilterOption('all')} className='py-2 px-4 bg-purple-500 rounded font-bold text-white'>All Jobs</button>
                </div>
                <div>
                    {
                        filterJobDetails.map(job => <JobApplied
                            key={job.id}
                            job={job}
                        ></JobApplied>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Applied;