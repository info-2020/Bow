import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('user-token');
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null
    }
  };
});

const httpLink = new HttpLink({ uri: 'http://111.229.124.12:8081/graphql/' });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

export default client;
