/**
 * This file is for testing graphql queries to the backend
 * 
 */

// Apollo Guide stuff
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";


export default function queryBooks() {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: "http://localhost:4000/",
  });

  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link,
  });

  client
    .query({
      query: gql`
        query getBooks {
          books {
            title
            author
          }
        }
      `,
    })
    .then((result) => console.log(result));
}