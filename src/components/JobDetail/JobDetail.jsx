import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot, faBriefcase, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { addToDb, getShoppingCart } from '../../utilities/fakeDb';

const JobDetail = () => {
    const jobId = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('feature-data.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    const jobDetail = details.find(detail => detail.id === jobId.id);

    useEffect( ()=>{
        const appliedJob = getShoppingCart()
        let saveJob = []
        for(const id in appliedJob){
            const addedJob = details.find(job => job.id === id);
            if(addedJob){
                const quantity = appliedJob[id];
                addedJob.quantity = quantity;
                saveJob.push(addedJob)
            }
        }
        setDetails(saveJob)
    }, [])

     const handleViewDetails = (jobs) =>{
      const newJob = [...details, jobs];
      setDetails(newJob)
      addToDb(jobs.id)
    }

    return (
        <div >
            <div className='text-center bg-gray-300 py-20'>
                <h2 className='font-bold text-4xl'>Job Details</h2>
            </div>

            <div className='flex items-center gap-40 px-32 mt-20 pb-5'>
                <div className='w-2/4'>
                    <p className=' text-xl text-gray-700 mb-5'><span className='font-bold text-slate-900 text-2xl'>Job Description:</span> {jobDetail && jobDetail.description}</p>
                    <p className=' text-xl text-gray-700 mb-5'><span className='font-bold text-slate-900 text-2xl'>Job Responsibility:</span> {jobDetail && jobDetail.resposibility}</p>
                    <p className=' text-xl text-gray-700 mb-5'><span className='font-bold text-slate-900 text-2xl'>Eductaional Requirement:</span > <br /> {jobDetail && jobDetail.requirement}
                    </p>
                    <h6 className=' text-xl text-gray-700'><span className='font-bold text-slate-900 text-2xl'>Experience:</span> <br />
                        {jobDetail && jobDetail.experience}
                    </h6>
                </div>

                <div className='bg-purple-100 p-20 rounded'>
                    <h2 className='font-bold text-2xl mb-6'>Job Details</h2>
                    <hr className='border-2 border-gray-600 my-3'/>
                    <div className='flex gap-2 items-center mb-5'>
                        <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faCircleDollarToSlot} />
                        <p className='font-semibold text-xl'><span className='font-bold'>Salary:</span> {jobDetail && jobDetail.salary} (Per Month)</p>
                    </div>
                    <div className='flex gap-1 mb-5 items-center'>
                        <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faBriefcase} />
                        <p className='font-semibold text-xl'><span className='font-bold'>Job Title:</span> {jobDetail && jobDetail.title}</p>
                    </div>

                    <h2 className='font-bold text-2xl mb-6'>Connect Information</h2>
                    <hr className='border-2 border-gray-600 my-3'/>
                    <div className='flex gap-1 items-center mb-5'>
                        <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faPhone} />
                        <p className='font-semibold text-xl'><span className='font-bold'>Phone:</span> {jobDetail && jobDetail.phone}</p>
                    </div>
                    <div className='flex gap-1 items-center mb-5'>
                        <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faEnvelope} />
                        <p className='font-semibold text-xl'><span className='font-bold'>Email:</span> {jobDetail && jobDetail.email}</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faLocationDot} />
                        <p className='font-semibold text-xl'><span className='font-bold'>Address:</span> {jobDetail && jobDetail.location}</p>
                    </div>

                    <button onClick={() => handleViewDetails(jobDetail)} className='mt-8 hover:bg-purple-600 bg-purple-500 py-3 px-4 font-bold text-white rounded w-full'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;