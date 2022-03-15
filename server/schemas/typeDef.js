const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
    }

    type User {
        _id: ID
        username: String
        email: String
        savedLocations: [Location]
        savedComments: [Comment]
    }
    type Location {
        _id: ID
        postId: [Post]
        commentId: [Comment]
    }
    type Post {
        _id: ID
        postText: String
        createdAt: String
        locationId: [Location]
        userId: [User]
    }
    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        postId: [Post]
        userId: [User]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String, password: String): Auth
        saveLocation(region: String!, description: String!, image: String!, locationId: String! ): User
        saveComment(user: String!, commentId: String!)    
    }
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;