import { FaTimes } from 'react-icons/fa';

const Book = ({ book }) => {
  return (
    <div>
      <h3>
        {book.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(book.id)}
        />
      </h3>
      <p>{book.day}</p>
    </div>
  );
};

export default Book;
