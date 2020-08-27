import { gql } from '@apollo/client';

export const PUBLISH = gql`
  fragment result on Result {
    data
    error
  }
  mutation spaceBaseInfo($name: String!, $action: String!, $username: String!, $password: String!) {
    submit(sName: $name, action: $action, param1: $username, param2: $password) {
      ...result
    }
  }
`;
