import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import apolloClient from './apollo-client'

import { ApolloProvider } from '@apollo/react-hooks'

const WithApollo = () => (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<WithApollo />, document.getElementById('root'))

serviceWorker.unregister()
