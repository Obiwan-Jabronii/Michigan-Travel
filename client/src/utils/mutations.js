import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
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
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      createdAt
      username
      comments {
        _id
      }
    }
  }
`

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      commentText
      createdAt
      username
    }
  }
`;
export const UPDATE_USER = gql`
    mutation updateUser($username: String, $email: String, $password: String) {
        updateUser(username: $username, email: $email, password: $password) {
            username
            email
            password
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($ID: ID!) {
        deleteUser(_id: $ID) {
            _id
            email
            username
        }
    }
`