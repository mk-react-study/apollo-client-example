import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:5011'
})

export default apolloClient
