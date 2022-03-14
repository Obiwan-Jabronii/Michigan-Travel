const { User, Post, Location } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolver = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({_id: context.user_id}).select('-__v-password')

                return userData;
            }
            throw new AuthenticationError('You are not logged in.')
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Password or username is incorrect. Please try again.')
            }

            const correctPass = await user. isCorrectPassword(password);

            if(!correctPass) {
                throw new AuthenticationError('Password or username is incorrect. Please try again.')
            }

            const token = signToken(user);
            return { token, user };
        },
        saveLocation: async (parent, { locationData }, context ) => {
            if (context.user) {
                const updateUser = await User.findOneAndUpdate(
                    {_id: context.user_id },
                    { $push: { savedLocations: locationData} },
                    { new: true }
                );

                return updateUser;
            }

            throw new AuthenticationError('You need to be logged in!')
        },
        addPost: async (parent, args, context) => {
            if(context.user) {
                const post = await Post.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    {_id: context.user_id},
                    { $push: {posts: post._id}},
                    {new: true}
                );

                return post
            }

            throw new AuthenticationError('You must be logged in to post!')
        },
        addComment: async (parent, { postId, commentText }, context) => {
            if (context.user) {
                const updatePost = await Post.findOneAndUpdate(
                    {_id: postId},
                    { $push: {comments: { commentText, username: context.user.username }}},
                    { new: true }
                );
                return updatePost
            }
            throw new AuthenticationError('You must be logged in to comment!')
        }
    }
}

module.exports = resolver;