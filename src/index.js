import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:5011'
})

client
  .query({
    query: gql`
      {
        books {
          id
          title
          author
        }
      }
    `
  })
  .then(result => console.log(result))

const WithApollo = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<WithApollo />, document.getElementById('root'))

serviceWorker.unregister()
