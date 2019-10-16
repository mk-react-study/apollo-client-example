import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import './App.css'
import Test from './Test'

const GET_BOOK_LIST = gql`
  {
    books {
      id
      title
      author
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOK_LIST)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const useQueryData = data.books.map(book => {
    return (
      <div key={book.id}>
        <p>
          <strong>Title:</strong>
          {book.title} <strong>Author:</strong>
          {book.author}
        </p>
      </div>
    )
  })

  return (
    <div>
      <h1>! How to useQuery !</h1>
      {useQueryData}
      <h1>! How to fetch through Client !</h1>
      <Test />
    </div>
  )
}

export default App
