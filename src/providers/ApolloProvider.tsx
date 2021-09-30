import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider as Provider } from "@apollo/client";

// Constants
const { REACT_APP_APPSYNC_API_URL, REACT_APP_APPSYNC_API_KEY } = process.env;

// Endpoint with authentication header
const graphqlLink = new HttpLink({
  uri: REACT_APP_APPSYNC_API_URL,
  headers: {
    "X-API-KEY": REACT_APP_APPSYNC_API_KEY,
  },
});

const mergeListUsersQuery = (existing: any, incoming: any) => ({
  ...existing,
  ...incoming,
  items: (existing?.items ?? []).concat(incoming?.items ?? []),
});

// GraphQL/Apollo client
const graphqlClient = new ApolloClient({
  link: graphqlLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          listUsers: { keyArgs: ["filter"], merge: mergeListUsersQuery },
        },
      },
    },
  }),
});

export default function ApolloProvider({ children }: any) {
  return <Provider client={graphqlClient}>{children}</Provider>;
}
