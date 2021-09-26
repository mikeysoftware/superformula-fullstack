import gql from "graphql-tag";

export const createUser = /* GraphQL */ gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
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
export const deleteUser = /* GraphQL */ gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
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
export const updateUser = /* GraphQL */ gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
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
