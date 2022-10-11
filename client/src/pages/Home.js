import React, { useState } from 'react';
import LocationList from '../components/LocationList';
import RegionMenu from '../components/RegionMenu';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
    const [currentRegion, setRegion] = useState("")
    return (
        <div>
            <Jumbotron/>
        
            <div className='container'>
                <RegionMenu setRegion={setRegion}/>
                <LocationList currentRegion={currentRegion}/>
            </div>
        </div>
    );
};

export default Home; 