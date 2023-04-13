import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from './JobCard';

const CategoryJob = () => {
    const jobs = useLoaderData();
    const { category, details } = jobs;

    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-5 mt-20">{category}</h1>
            <hr />
            <div className="drawer drawer-mobile w-4/5 mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* job table */}
                    <div>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <tbody>

                                    {
                                        details.map(options => <JobCard
                                            key={options._id}
                                            options={options}
                                        ></JobCard>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default CategoryJob;