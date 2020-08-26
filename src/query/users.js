import { gql } from '@apollo/client';

export const ALL_USERS = gql`
  query allUsers {
    posts(sName: "account", action: "users") {
      data
      error
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    submit(sName: "account", action: "login", param1: $username, param2: $password) {
      data
      error
    }
  }
`;

export const USER_POSTS = gql`
  query userPosts($userName: String!) {
    posts(sName: "usersPosts", action: "userPosts", param1: $userName) {
      data
      error
    }
  }
`;

export const REG = gql`
  mutation reg($username: String!, $password: String) {
    submit(sName: "account", action: "reg", param1: $username, param2: $password) {
      data
      error
    }
  }
`;

export const SPACES = gql`
  query allSpace {
    posts(sName: "spaces", action: "spaces") {
      data
      error
    }
  }
`;
