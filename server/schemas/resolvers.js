const { User } = require('../models');
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
    }
}

module.exports = resolver;