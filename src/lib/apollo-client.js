import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
// https://www.apollographql.com/docs/link/composition/
// https://www.apollographql.com/docs/link/overview/

const timeStartLink = new ApolloLink((operation, forward) => {
  // Set context for next link
  operation.setContext({ start: new Date() })
  return forward(operation)
})

const logTimeLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(data => {
    // data from a previous link
    const time = new Date() - operation.getContext().start
    console.log(`operation ${operation.operationName} took ${time} to complete`)
    return data
  })
})

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
}

const httpLink = createHttpLink({ uri: 'http://localhost:5011' })

// This is nice way to cancat multiple link and set context from one to another for comunication
//
const link = ApolloLink.from([timeStartLink, logTimeLink, httpLink])
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link,
  cache,
  defaultOptions // Optional if remove then only one query will be fired from client
})

export default apolloClient
