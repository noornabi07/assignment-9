import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobApplied from '../JobApplied/JobApplied';

const Applied = () => {
    const jobs = useLoaderData()
    return (
        <div>
            <div className='bg-gray-300 py-10 pb-15'>
                <h2 className='mt-20 text-center font-bold text-3xl'>Applied Jobs</h2>
            </div>
            <div className='mt-20 px-40'>
                {
                    jobs.map(job => <JobApplied
                        key={job.id}
                        job={job}
                    ></JobApplied>)
                }
            </div>
        </div>
    );
};

export default Applied;