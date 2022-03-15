const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const date = require('../utils/date');

const postSchema = new Schema(
    {
        postBody: {
            type: String,
            minlength: 3,
            maxlength: 2000
        },
        username: {
            type: String,
            require: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => date(createdAtVal)
        },
        // comments: [commentSchema]
});

const Post = model('Post', postSchema);

module.exports = Post;