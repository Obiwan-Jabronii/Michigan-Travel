const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
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
        username: String
        createdAt: String
        comments: [Comment]
        locationId: [Location]
    }
    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String, password: String): Auth
        addPost(postText: String!): Post
        addComment(commentId: ID!, commentText: String!): Post
        saveLocation(region: String!, description: String!, image: String!, locationId: String! ): User   
    }
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;