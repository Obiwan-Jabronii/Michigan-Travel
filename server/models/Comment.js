const { Schema, model } = require('mongoose');
const date = require('../utils/date');

const commentSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        commentText: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 300
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => date(timestamp)
        }
});


module.exports = commentSchema;

