const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const date = require('../utils/date');

const postSchema = new Schema(
    {
        postText: {
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
        comments: [commentSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

postSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});


module.exports = postSchema;