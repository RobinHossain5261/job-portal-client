import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobOptions from './JobOptions';

const Category = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    })
    return (
        <div className='text-center py-20'>
            <p>Current Job Posts </p>
            <h2 className='text-4xl font-bold'>Categories</h2>

            <div className='w-1/2 mx-auto grid lg:grid-cols-2 gap-5 pt-10'>
                {
                    jobs.map(options => <JobOptions
                        key={options._id}
                        options={options}
                    ></JobOptions>)
                }
            </div>


        </div>

    );
};

export default Category;