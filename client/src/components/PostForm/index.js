import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_ME, QUERY_POSTS } from '../../utils/queries';

const Postform = () => {
    const [postText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });
                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] },
                });
            } catch (e) {
                console.error(e);
            }

            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, posts: [...me.posts, addPost] }},
            });
        },
    });

    const handleChange = (event) => {
        if (event.target.value.length <= 1000) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addPost({
                variables: { postText },
            });
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p className={`m-0 ${characterCount === 1000 || error ? 'error' : ''}`}>
                Character Count: {characterCount}/1000
                {error && <span className='ml-2'>Too Many Characters</span>}
            </p>
            <form className='flex-row justify-center justify-space-between' onSubmit={handleFormSubmit}>
                <textarea placeholder='Tell us about your experience!' value={postText} className='form-input col-12' onChange={handleChange}></textarea>
                <button className='btn col-12' type='submit'>Post</button>
            </form>
        </div>
    );
};

export default Postform;