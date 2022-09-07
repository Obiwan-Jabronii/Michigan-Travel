const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
        locations(region: ID, name: String): [Location]
        location(_id:ID!): Location
    }

    type Region {
        _id: ID
        name: String
    }

    type User {
        _id: ID
        username: String
        email: String
        locations: [Location]
        posts: [Post]
    }
    type Location {
        _id: ID
        name: String
        image: String
        region: Region
        description: String
        posts: [Post]
    }
    type Post {
        _id: ID
        postText: String
        username: String
        createdAt: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(postText: String!): Post
        saveLocation( locationId: ID! ): User   
    }
    type Auth {
        token: ID
        user: User
    }
`;

module.exports = typeDefs;