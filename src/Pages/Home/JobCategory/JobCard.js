import React from 'react';

const JobCard = ({ options }) => {
    const { image, company, location, job } = options;
    return (
        <div>

            <tr className=' grid lg:grid-cols-4 md:grid-cols-2 justify-between items-center my-2 shadow-md'>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16">
                                <img src={image} alt="company image" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{company}</div>

                        </div>
                    </div>
                </td>
                <td className='ml-20'>
                    {location}
                </td>
                <td>{job}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">Apply</button>
                </th>
            </tr>

        </div>

    );
};

export default JobCard;