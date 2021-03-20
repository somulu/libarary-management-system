import Book from './BookList';

const Books = ({ books }) => {
  return (
    <>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </>
  );
};

export default Books;
