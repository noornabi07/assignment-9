import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot, faBriefcase, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const JobDetail = () => {
    const jobId = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('feature-data.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    const jobDetail = details.find(detail => detail.id === jobId.id);
    console.log(jobDetail)

    return (
        <div >
            <div className='text-center bg-gray-300 py-20'>
                <h2 className='font-bold text-4xl'>Job Details</h2>
            </div>

            <div className='flex items-center gap-40 px-32 mt-20 pb-5'>
                <div className='w-2/4'>
                    <p className=' text-xl text-gray-700 mb-5'><span className='font-bold text-slate-900'>Job Description:</span> {jobDetail && jobDetail.description}</p>
                    <p className=' text-xl text-gray-700 mb-5'><span className='font-bold text-slate-900'>Job Responsibility:</span> {jobDetail && jobDetail.resposibility}</p>
                    <p className=' text-xl text-gray-700 mb-5'><span className='font-bold text-slate-900'>Eductaional Requirement</span > <br /> {jobDetail && jobDetail.requirement}
                    </p>
                    <h6 className=' text-xl text-gray-700'><span className='font-bold text-slate-900'>Experience:</span> <br />
                        {jobDetail && jobDetail.experience}
                    </h6>
                </div>

                <div className='bg-slate-900 text-white p-20 rounded'>
                    <h2 className='font-bold text-2xl mb-6'>Job Details</h2>
                    <div className='flex gap-2 items-center mb-5'>
                        <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faCircleDollarToSlot} />
                        <p className='font-semibold text-xl'>Salary: {jobDetail && jobDetail.salary} (Per Month)</p>
                    </div>
                    <div className='flex gap-1 mb-5 items-center'>
                        <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faBriefcase} />
                        <p className='font-semibold text-xl'>Job Title: {jobDetail && jobDetail.title}</p>
                    </div>

                    <h2>Connect Information</h2>
                    <div className='flex gap-1 items-center mb-5'>
                        <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faPhone} />
                        <p className='font-semibold text-xl'>Phone: {jobDetail && jobDetail.phone}</p>
                    </div>
                    <div className='flex gap-1 items-center mb-5'>
                        <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faEnvelope} />
                        <p className='font-semibold text-xl'>Email: {jobDetail && jobDetail.email}</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faLocationDot} />
                        <p className='font-semibold text-xl'>Address: {jobDetail && jobDetail.location}</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;