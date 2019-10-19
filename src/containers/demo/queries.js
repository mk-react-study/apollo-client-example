import { gql } from 'apollo-boost'

export const GET_BOOK_LIST = gql`
  {
    books {
      id
      title
      author
    }
  }
`
