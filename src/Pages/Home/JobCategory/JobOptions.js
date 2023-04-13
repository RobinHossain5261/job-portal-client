import React from 'react';
import { Link } from 'react-router-dom';

const JobOptions = ({ options }) => {
    const { _id, category } = options;
    return (

        <div className='flex justify-center items-center'>
            <Link to={`/allJobs/${_id}`} className='text-2xl font-semibold py-10 px-24 border border-indigo-500	 hover:bg-indigo-500 hover:text-white rounded-xl'>{category}</Link>
        </div>
    );
};

export default JobOptions;