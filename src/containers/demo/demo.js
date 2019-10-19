import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_BOOK_LIST } from './queries'
import GetBooks from '../../components/use-query/get-books'
import GetBookQuery from '../../components/query/query'

const Demo = () => {
  //Use Query Hook can't be called from out side of react function
  const { loading, error, data } = useQuery(GET_BOOK_LIST)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const useQueryData = GetBooks(data)

  return (
    <div>
      <h1>! How to useQuery !</h1>
      {useQueryData}
      <h1>! How to fetch through Client !</h1>
      <GetBookQuery />
    </div>
  )
}

export default Demo
