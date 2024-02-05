import { gql } from '@apollo/client';

export const SOME_QUERY = gql`
  query someQuery($someId: String) {
    someQuery(someId: $someId) {
      success
      record {
        name
      }
    }
  }
`;

export const SOME_MUTATION = gql`
  query someMutation($someValue: String) {
    someMutation(data: { value: $someValue }) {
      id
    }
  }
`;
