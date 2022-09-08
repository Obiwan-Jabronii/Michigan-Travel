import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LOCATIONS } from '../utils/queries';
import AuthService  from '../utils/auth';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';


function SingleLocation() {
    const { id } = useParams();

    const [currentLocation, setCurrentLocation ] = useState({});

    const { loading, data } = useQuery(QUERY_LOCATIONS);

    const locations = data?.locations || [];

    useEffect(() => {
        if (locations.length) {
            setCurrentLocation(locations.find((location) => location._id === id));
        }
    }, [locations, id]);

    return (
        <>
            {currentLocation ? (
                <div className='container'>
                    <Link to="/">Back to Locations</Link>

                    <h2>{currentLocation.name}</h2>
                    <img
                        src={`/images/${currentLocation.image}`}
                        alt={currentLocation.name}
                    />
                    <p>
                        {currentLocation.description}
                    </p>
                    {AuthService.loggedIn() && <PostForm locationId={currentLocation._id} />}
                    {<PostList posts={currentLocation.posts} />}
                </div>
            ): null}
        </>
    );
}

export default SingleLocation;