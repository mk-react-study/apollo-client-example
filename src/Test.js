import React from 'react'
import { gql } from 'apollo-boost'
import apolloClient from './lib/apollo-client'

class Test extends React.Component {
  state = null

  componentDidMount = () => {
    apolloClient
      .query({
        query: gql`
          {
            books {
              id
              title
              author
            }
          }
        `,
        context: { saveOffline: 'Hello' }
      })
      .then(result => {
        this.setState({ book: result })
      })
  }

  render() {
    let webServiceDetails = <div>Fething Data!!!!</div>
    if (this.state) {
      webServiceDetails = <div>{JSON.stringify(this.state)}</div>
    }
    return webServiceDetails
  }
}

export default Test
