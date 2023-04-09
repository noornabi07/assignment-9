import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-900 text-white flex justify-between px-20 items-center py-4 font-semibold text-xl'>
            <h2>Apply Center</h2>
            <div>
                <Link className='px-4 hover:text-purple-400' to="/">Home</Link>
                <Link className='px-4 hover:text-purple-400' to="/statistics">Statistics</Link>
                <Link className='px-4 hover:text-purple-400' to="/applied">Applied Jobs</Link>
                <Link className='px-4 hover:text-purple-400' to="/blog">Blog</Link>
            </div>
            <button className='bg-purple-500 py-2 hover:bg-purple-600 px-4 rounded-lg'>Star Applying</button>
        </nav>
    );
};

export default Header;