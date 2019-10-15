import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import './App.css'

const GET_BOOK_LIST = gql`
  {
    books {
      title
      author
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOK_LIST)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return data.books.map(book => {
    return (
      <div>
        <p>
          <strong>Title:</strong>
          {book.title} <strong>Author:</strong>
          {book.author}
        </p>
      </div>
    )
  })
}

export default App
