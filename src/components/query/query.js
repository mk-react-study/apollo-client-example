import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import apolloClient from '../../lib/apollo-client'

class GetBookQuery extends Component {
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
        `
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

export default GetBookQuery
