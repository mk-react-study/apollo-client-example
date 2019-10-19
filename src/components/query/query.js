import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_BOOK_LIST = gql`
  {
    books {
      id
      title
      author
    }
  }
`
const QueryGetBooks = () => {
  return (
    <Query query={GET_BOOK_LIST}>
      {({ loading, error, data }) => {
        return <div>{JSON.stringify(data)}</div>
      }}
    </Query>
  )
}

export default QueryGetBooks
