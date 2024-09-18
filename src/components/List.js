import React, { useState } from 'react';
import { connect } from 'react-redux';
import Book from './Component';
import EditForm from './EditForm';
import DeleteButton from './DeleteButton';
import { Delete } from '../redux/actions/componentActions';

function List({ books, Delete }) {
  const [getEditingId, SetEditingId] = useState(null);

  const handleEditClick = (bookId) => {
    SetEditingId(bookId);
  };

  const handleDeleteClick = (bookId) => {
    Delete(bookId);
  };

  return (
    <div>
      <ul>
        <p class="subtitle">List</p>
        {books.map((book) => (
          <li class="form" key={book.id}>
            <Book book={book} />
            {getEditingId === book.id ? (
              <EditForm book={book} onClose={() => SetEditingId(null)} />
            ) : (
              <>
                <button onClick={() => handleEditClick(book.id)}>Edit</button>
                <DeleteButton id={book.id} OnDelete={() => handleDeleteClick(book.id)} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps, { Delete })(List); 
