import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../images/carousel-2.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://thumbs.dreamstime.com/b/smiling-asian-businesswoman-handshaking-businessman-hiring-si-candidate-job-interview-signing-contract-making-deal-116517330.jpg")` }}>

            <div className="hero-overlay bg-opacity-60">
            </div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <p className='text-black'>Find Job, Employment, and Career Opportunities</p>
                    <h1 className="mb-5 text-5xl font-bold mt-3 mb-5">Your Dream Job is Waiting</h1>

                    <button className='bg-base-100 rounded-t-md font-semibold text-black py-3 px-5 focus:bg-primary focus:text-white hover:bg-primary hover:text-white'>Job Seeker</button>
                    <button className='bg-base-100 rounded-t-md font-semibold text-black  py-3 px-5 ml-3 focus:bg-primary focus:text-white hover:bg-primary hover:text-white'>Job Poster</button>

                    <div className='bg-base-100 p-10 rounded-xl lg:flex gap-3 z-10'>
                        <input type="text" placeholder="Your keyword" className="input input-bordered w-full lg:max-w-xs" />
                        <select className="select select-bordered w-full lg:max-w-[150px] text-[#A7A7A7] my-3 lg:my-0">
                            <option disabled selected>Category</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                        </select>
                        <input type="text" placeholder="Location" className="input input-bordered w-full lg:max-w-xs" />
                        <Link className="btn btn-primary w-full lg:max-w-[100px] mt-3 lg:mt-0">Search</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;