import { useState } from 'react';
import {editBookById} from '../context/books';

const BookEdit = ({ book, onSubmit }) => {

  const [bookDesc, setBookDesc] = useState({
    title: book.title,
    author: book.author,
    id: book.id
  }); 

  const submitHandler = (event) => {
    event.preventDefault()

    onSubmit(bookDesc)
    editBookById(book.id, bookDesc)
  };

  const changeHandler = (event) => {
    const {name, value} = event.target
    setBookDesc({
      ...bookDesc,
      [name]: value
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={bookDesc.title}
        name='title'
        placeholder={book.title}
        onChange={changeHandler}
      />
      <input
        value={bookDesc.author}
        name='title'
        placeholder={book.author}
        onChange={changeHandler}
      />
      <input type='submit' />
    </form>
  );
};

export default BookEdit;