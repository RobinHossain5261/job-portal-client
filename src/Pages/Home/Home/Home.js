import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;