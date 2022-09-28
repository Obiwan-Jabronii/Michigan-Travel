import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LOCATION } from '../utils/queries';
import AuthService  from '../utils/auth';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';


function SingleLocation() {
    const { id: locationId } = useParams();

    const { loading, data } = useQuery(QUERY_LOCATION, {
        variables: { id: locationId}
    });

    const location = data?.location || [];

    if (loading) {
        return <div>Loading...</div>
    };

    return (
        <>
                <div className='container'>
                    <Link to="/">Back to Locations</Link>

                    <h2>{location.name}</h2>
                    <img
                        src={`/images/${location.image}`}
                        alt={location.name}
                    />
                    <p>
                        {location.description}
                    </p>
                    {AuthService.loggedIn() && <PostForm locationId={location._id} />}
                    {<PostList posts={location.posts} />}
                </div>
        </>
    );
}

export default SingleLocation;