import React from 'react';

const PostList = ({ posts }) => {
    // if (!posts.length) {
    //     return <h3>No Posts for this location yet</h3>
    // }


    return (
        <div className='container'>
            {posts &&
            posts.map(post => (
                <div key={post._id} className='card my-2' style={{ width: '80%' }}>
                    <p className='card-header' style={{ backgroundColor: 'var(--secondary)'}}>
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