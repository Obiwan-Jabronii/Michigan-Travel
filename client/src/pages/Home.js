import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
return (
     
    <div className="flex justify-center text-center text-bold text-3xl">
        <h1>Welcome to Michigan Wanders!</h1>
        <p className="text-center text-3xl">
            If you're looking to explore all that the great State of Michigan
            has to offer, then look no further!
        </p>
   
    <div className='mt-6'>
    <Link to="/" className=" text-3xl">
      Click here to explore!
    </Link>
    </div>
    </div>
    
    );
}

export default HomePage;

