import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      locations
      posts {
        _id
        postText
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      createdAt
      username
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      createdAt
      username
    }
  }
`;

export const QUERY_LOCATIONS = gql`
  query getlocations($region: ID) {
    locations(region: $region) {
      _id
      name
      region {
        _id
      }
      image
      description
    }
  }
`

export const QUERY_ALL_LOCATIONS = gql`
  {
    locations {
      _id
      name
      region {
        _id
        name
      }
      image
      description
    }
  }
`;

export const QUERY_LOCATION = gql`
  query location($id: ID!) {
    location(_id: $id) {
      _id
      name
      description
      region {
        _id
        name
      }
      image
      posts {
        _id
        username
        postText
        createdAt
      }
    }
  }
`;

export const QUERY_REGIONS = gql`
  {
    regions {
      _id 
      name
    }
  }
`;


