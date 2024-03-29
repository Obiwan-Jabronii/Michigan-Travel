const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Location = require('./Location');

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must enter a valid email address'],
        },
        password: {
            type: String,
            require: true,
        },
        locations: [Location.schema],
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.pre('save', async function (next) {
    if (this.new || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// password validation
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;

