const { Schema, model } = require('mongoose');
const postSchema = require('./Post');
const regionSchema = require('./Region');

const locationSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        posts: [postSchema],
        region: {
            type: Schema.Types.ObjectId,
            ref: 'Region',
            required: true
        }
    });

const Location = model('Location', locationSchema);

module.exports = Location;
