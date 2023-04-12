import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav className='bg-slate-900 text-white md:flex px-3 justify-center md:justify-between md:px-20 items-center py-4 font-semibold text-xl'>
            <h2 className='font-bold text-3xl'>Apply Center</h2>

            <div onClick={() => setOpen(!open)} className='md:hidden ml-80'>
                <p>
                    {open === true ? <XMarkIcon className="h-6 w-6 text-white" />
                 : <Bars3Icon className="h-6 w-6 text-white" />}
                 </p>
                
                
            </div>

            <div className={`md:block ${open ? 'block' : 'hidden'}`}>
                <Link className='md:px-4 block  md:inline hover:text-purple-400' to="/">Home</Link>
                <Link className='md:px-4 block  md:inline hover:text-purple-400' to="/statistics">Statistics</Link>
                <Link className='md:px-4 block  md:inline hover:text-purple-400' to="/applied">Applied Jobs</Link>
                <Link className='md:px-4 block  md:inline hover:text-purple-400' to="/blog">Blog</Link>
            </div>

            <button className='bg-purple-500 mt-4 md:mt-0 py-2 hover:bg-purple-600 px-4 rounded-lg'>Star Applying</button>
        </nav>
    );
};

export default Header;