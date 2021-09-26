import gql from "graphql-tag";

export const onCreateUser = /* GraphQL */ gql`
  subscription OnCreateUser(
    $address: String
    $description: String
    $dob: AWSDate
    $id: String
    $name: String
  ) {
    onCreateUser(
      address: $address
      description: $description
      dob: $dob
      id: $id
      name: $name
    ) {
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
export const onDeleteUser = /* GraphQL */ gql`
  subscription OnDeleteUser(
    $address: String
    $description: String
    $dob: AWSDate
    $id: String
    $name: String
  ) {
    onDeleteUser(
      address: $address
      description: $description
      dob: $dob
      id: $id
      name: $name
    ) {
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
export const onUpdateUser = /* GraphQL */ gql`
  subscription OnUpdateUser(
    $address: String
    $description: String
    $dob: AWSDate
    $id: String
    $name: String
  ) {
    onUpdateUser(
      address: $address
      description: $description
      dob: $dob
      id: $id
      name: $name
    ) {
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
