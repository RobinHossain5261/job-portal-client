import React from 'react';

const JobCategory = () => {
    return (
        <div className='text-center py-20'>
            <p>Current Job Posts </p>
            <h2 className='text-4xl font-bold'>Categories</h2>
            <div className='pt-10 w-1/2 mx-auto grid grid-cols-2 gap-10 '>
                <h2 className='text-2xl font-semibold p-10 border border-indigo-500	 hover:bg-indigo-500 hover:text-white rounded-xl'>Freshers Job</h2>
                <h2 className='text-2xl font-semibold p-10 border border-indigo-500	 hover:bg-indigo-500 hover:text-white rounded-xl'>Experienced Jobs</h2>
                <h2 className='text-2xl font-semibold p-10 border border-indigo-500	 hover:bg-indigo-500 hover:text-white rounded-xl'>Top IT Companies</h2>
                <h2 className='text-2xl font-semibold p-10 border border-indigo-500	 hover:bg-indigo-500 hover:text-white rounded-xl'>Blog section</h2>
            </div>
        </div>
    );
};

export default JobCategory;