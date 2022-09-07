import React, { useState } from 'react';
import LocationList from '../components/LocatonList';
import RegionMenu from '../components/RegionMenu';

const Home = () => {
    const [currentRegion, setRegion] = useState("")
    return (
        <div className='container'>
            <RegionMenu setRegion={setRegion}/>
            <LocationList currentRegion={currentRegion}/>
        </div>
    );
};

export default Home;