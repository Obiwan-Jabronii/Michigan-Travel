import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function Profile() {
    const { data } = useQuery(QUERY_ME);

    const user = data?.me || {}
    

    return (
        <div className='container'>
            <Link to='/'>Back to Locations</Link>

            {user ? (
                <>
                <h2>Saved Locations for {user.username}</h2>
                {/* {user.locations.map(({ _id, name, image, description }, index) => (
                    <div key={index} className='card'>
                        <Link to={`/locations/${_id}`}>
                            <h2>{name}</h2>
                            <img alt={name} src={`/images/${image}`} />
                        </Link>
                        <div>
                            <span>${description}</span>
                        </div>
                    </div> */}
                {/* ))} */}
                {/* <h2>{me.username}'s Posts</h2>
                {me.posts.map(({ _id, postText, createdAt}, index) => (
                    <div key={index} className='card'>
                        <Link to
                    </div>
                ))} */}
                </>
             ): null} 
        </div>
    );
}

export default Profile;