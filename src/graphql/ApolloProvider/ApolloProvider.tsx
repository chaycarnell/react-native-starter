import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { logger } from '@utils/logger';
import React, { PropsWithChildren, useMemo } from 'react';
import env from 'react-native-config';

const serviceURL = env.SERVICES_URL || 'http://localhost:4000';

const Render = ({ children }: PropsWithChildren) => {
  // Handle errors client side
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path, extensions }) =>
        logger.info(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Extension Code: ${
            extensions && extensions.code
          }`,
        ),
      );
    }
    if (networkError) {
      logger.info(`[Network error]: ${networkError}`);
    }
  });

  // Attempt to get auth token from identity provider here i.e. getJwtToken()
  const getToken = async () => Promise.resolve('');

  // Create authentication middleware to add id_token to requests
  const authLink = setContext(async (_, { headers }) => ({
    headers: {
      ...headers,
      authorization: await getToken(),
    },
  }));

  // Create HTTP and WS link
  const link = createHttpLink({
    uri: `${serviceURL}/graphql`,
  });

  // Create new apollo client
  const client = useMemo(
    () =>
      new ApolloClient({
        link: ApolloLink.from([errorLink, authLink, link]),
        cache: new InMemoryCache(),
      }),
    [errorLink, authLink, link],
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Render;
