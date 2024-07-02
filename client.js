import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";


const httpLink = createHttpLink({
  uri: process.env.WP_GRAPHQL_URL,
});

const client = new ApolloClient({
  // uri: process.env.WP_GRAPHQL_URL,
  cache: new InMemoryCache(),
  link: httpLink,
});

export default client;
