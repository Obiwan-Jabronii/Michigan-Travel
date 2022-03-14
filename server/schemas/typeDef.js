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
        locationId: String
        region: [Region]
    }
    type Comment {
        commentId: String
        user: [User]
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