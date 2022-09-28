import React from 'react';

const PostList = ({ posts }) => {
    // if (!posts.length) {
    //     return <h3>No Posts for this location yet</h3>
    // }


    return (
        <div>
            {posts &&
            posts.map(post => (
                <div key={post._id} className='card' style={{ width: '100%' }}>
                    <p className='card-header'>
                        {post.username}{' '}posted on {post.createdAt}
                    </p>
                    <div className='card-body'>
                        <p>{post.postText}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostList;