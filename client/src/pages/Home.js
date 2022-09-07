import React from 'react';
import LocationList from '../components/LocatonList';
import RegionMenu from '../components/RegionMenu';

const Home = () => {
    return (
        <div className='container'>
            <RegionMenu />
            <LocationList />
        </div>
    );
};

export default Home;