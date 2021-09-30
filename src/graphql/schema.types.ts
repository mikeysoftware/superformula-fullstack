export type CreateUserInput = {
  address?: string | null,
  createdAt?: string | null,
  description?: string | null,
  dob?: string | null,
  name?: string | null,
  updatedAt?: string | null,
};

export type User = {
  __typename: "User",
  address?: string | null,
  createdAt?: string | null,
  description?: string | null,
  dob?: string | null,
  id: string,
  name?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateUserInput = {
  address?: string | null,
  createdAt?: string | null,
  description?: string | null,
  dob?: string | null,
  id: string,
  name?: string | null,
  updatedAt?: string | null,
};

export type LocationInformation = {
  __typename: "LocationInformation",
  data: string,
  statusCode: number,
};

export type TableUserFilterInput = {
  address?: TableStringFilterInput | null,
  createdAt?: TableIntFilterInput | null,
  description?: TableStringFilterInput | null,
  dob?: TableStringFilterInput | null,
  id?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  updatedAt?: TableIntFilterInput | null,
};

export type TableStringFilterInput = {
  beginsWith?: string | null,
  between?: Array<string | null> | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type TableIntFilterInput = {
  between?: Array<number | null> | null,
  contains?: number | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notContains?: number | null,
};

export type UserConnection = {
  __typename: "UserConnection",
  items?: Array<User | null> | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User",
    address?: string | null,
    createdAt?: string | null,
    description?: string | null,
    dob?: string | null,
    id: string,
    name?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User",
    address?: string | null,
    createdAt?: string | null,
    description?: string | null,
    dob?: string | null,
    id: string,
    name?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User",
    address?: string | null,
    createdAt?: string | null,
    description?: string | null,
    dob?: string | null,
    id: string,
    name?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetLocationInformationQueryVariables = {
  address: string,
};

export type GetLocationInformationQuery = {
  getLocationInformation?: {
    __typename: "LocationInformation",
    data: string,
    statusCode: number,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User",
    address?: string | null,
    createdAt?: string | null,
    description?: string | null,
    dob?: string | null,
    id: string,
    name?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: TableUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "UserConnection",
    items?: Array<{
      __typename: "User",
      address?: string | null,
      createdAt?: string | null,
      description?: string | null,
      dob?: string | null,
      id: string,
      name?: string | null,
      updatedAt?: string | null,
    } | null> | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  address?: string | null,
  description?: string | null,
  dob?: string | null,
  id?: string | null,
  name?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: "User",
    address?: string | null,
    createdAt?: string | null,
    description?: string | null,
    dob?: string | null,
    id: string,
    name?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  address?: string | null,
  description?: string | null,
  dob?: string | null,
  id?: string | null,
  name?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: "User",
    address?: string | null,
    createdAt?: string | null,
    description?: string | null,
    dob?: string | null,
    id: string,
    name?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  address?: string | null,
  description?: string | null,
  dob?: string | null,
  id?: string | null,
  name?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: "User",
    address?: string | null,
    createdAt?: string | null,
    description?: string | null,
    dob?: string | null,
    id: string,
    name?: string | null,
    updatedAt?: string | null,
  } | null,
};
