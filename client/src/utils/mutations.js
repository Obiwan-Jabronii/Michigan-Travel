import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!, $locationId: ID!) {
    addPost(postText: $postText, locationId: $locationId) {
      _id
      postText
      createdAt
      username

    }
  }
`

export const SAVE_LOCATION = gql`
  mutation saveLocation($locationId: ID!) {
    savelocation(locationId: $locationId) {
      _id
      name
      region
      image
      description
    }
  }
`