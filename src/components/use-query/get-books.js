import React from 'react'

const GetBooks = data => {
  const books = data.books.map(book => {
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
  return books
}

export default GetBooks
