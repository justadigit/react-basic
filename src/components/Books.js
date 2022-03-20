import React from 'react';
import Book from './Book';

function Books({ list }) {
  return (
    <ul>
      {list.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
  );
}
export default Books;
