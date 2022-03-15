const { Schema, model } = require('mongoose');
const postSchema = require('./Post');

const locationSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        // posts: [postSchema]
    });

const Location = model('Location', locationSchema);

module.exports = Location;
