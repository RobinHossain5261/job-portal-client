import React from 'react';
import jobs from '../../../images/job-description.png';
import badge from '../../../images/badge.png';
import career from '../../../images/career-promotion.png';
import interview from '../../../images/interview.png';

const Info = () => {
    return (
        <div className=' bg-gray-200 py-20'>
            <div className='w-3/4 mx-auto grid grid-cols-4 gap-10'>
                <div>
                    <img className='w-[60px]' src={jobs}></img>
                    <h3 className='text-2xl py-3 font-semibold'>Search Millions of Jobs</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
                </div>
                <div>
                    <img className='w-[60px]' src={interview}></img>
                    <h3 className='text-2xl py-3 font-semibold'>Easy To Manage Jobs</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
                </div>
                <div>
                    <img className='w-[60px]' src={career}></img>
                    <h3 className='text-2xl py-3 font-semibold'>Top Careers</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
                </div>
                <div>
                    <img className='w-[60px]' src={badge}></img>
                    <h3 className='text-2xl py-3 font-semibold'>Search Expert Candidates</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
                </div>
            </div>
        </div>
    );
};

export default Info;