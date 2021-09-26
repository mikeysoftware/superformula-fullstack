import gql from "graphql-tag";

export const getLocationInformation = /* GraphQL */ gql`
  query GetLocationInformation($address: String!) {
    getLocationInformation(address: $address) {
      data
      statusCode
    }
  }
`;
export const getUser = /* GraphQL */ gql`
  query GetUser($id: String!) {
    getUser(id: $id) {
      address
      createdAt
      description
      dob
      id
      name
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ gql`
  query ListUsers(
    $filter: TableUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        address
        createdAt
        description
        dob
        id
        name
        updatedAt
      }
      nextToken
    }
  }
`;
