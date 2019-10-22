import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import apolloClient from './lib/apollo-client'
import { ApolloProvider } from 'react-apollo' // To use with react-apollo's ApolloProvider already present in your project:
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
//https://www.npmjs.com/package/react-apollo-hooks

const WithApollo = () => (
  <ApolloProvider client={apolloClient}>
    <ApolloHooksProvider client={apolloClient}>
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>
)

ReactDOM.render(<WithApollo />, document.getElementById('root'))

serviceWorker.unregister()
