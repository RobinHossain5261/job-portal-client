import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Category from '../JobCategory/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Category></Category>
        </div>
    );
};

export default Home;