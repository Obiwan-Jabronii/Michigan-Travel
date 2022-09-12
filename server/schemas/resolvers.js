const { User, Post, Location, Region } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolver = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findById( context.user._id)
                .select('-__v-password')
                //.populate('posts')
                //.populate('locations')

                return userData;
            }
            throw new AuthenticationError('You are not logged in.')
        },
        locations: async (parent, {region, name }) => {
            const params = {};

            if (region) {
                params.region = region;
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return await Location.find(params).populate('region')
        },
        location: async (parent, { _id }) => {
            return await Location.findById(_id).populate('region').populate('posts')
        },
        users: async () => {
            return User.find()
            .select('-__v -password')
            //.populate('posts')
        },
        posts: async (parent, {username}) => {
            const params = username ? { username} : {};
            return Post.find(params).sort({ createdAt: -1});
        },
        post: async (parent, { _id }) => {
            return Post.findOne({ _id});
        },
        user: async (parent, { username }) => {
            return User.findOne({ username})
            .select('-__v -password')
            //.populate('posts')
        },
        regions: async () => {
            return await Region.find();
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

            const correctPass = await user.isCorrectPassword(password);

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
                    { $push: { locations: locationData} },
                    { new: true }
                );

                return updateUser;
            }

            throw new AuthenticationError('You need to be logged in!')
        },
        addPost: async (parent, { locationId, postText }, context) => {
            if(context.user) {
                const updatedLocation = await Location.findOneAndUpdate(
                    { _id: locationId },
                    { $push: { posts: { postText, username: context.user.username } } },
                    { new: true, runValidators: true}
                );

                return updatedLocation;
            }

            throw new AuthenticationError('You must be logged in to post!')
        }
    }
}

module.exports = resolver;