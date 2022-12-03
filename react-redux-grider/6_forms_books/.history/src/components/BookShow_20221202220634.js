
const BookShow = ({ book, onDelete }) => {
  const deleteHandler = () => {
    onDelete(book.id);
  };

  return (
    <div className='book-show'>
      <h2>{book.title}</h2>
      <p>by: {book.author}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default BookShow;