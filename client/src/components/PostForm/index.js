import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';

const Postform = ({locationId}) => {
    const [postText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addPost, { error }] = useMutation(ADD_POST)


    const handleChange = (event) => {
        if (event.target.value.length <= 1000) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        (console.log(postText))
        try {
            await addPost({
                variables: { locationId, postText },
            });
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p className={`m-0 ${characterCount === 500 || error ? 'error' : ''}`}>
                Character Count: {characterCount}/500
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