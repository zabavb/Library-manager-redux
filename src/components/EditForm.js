import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Edit } from '../redux/actions/componentActions';

function EditForm({ book, Edit, onClose }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [publicationYear, setPublicationYear] = useState(book.publicationYear);
  const [genre, setGenre] = useState(book.genre);
  const [isbn, setIsbn] = useState(book.isbn);
  const [coverImage, setCoverImage] = useState(book.coverImage);
  const [pages, setPages] = useState(book.pages);
  const [price, setPrice] = useState(book.price);
  const [available, setAvailable] = useState(book.available);

  const handleSubmit = (e) => {
    e.preventDefault();

    Edit({ id: book.id, title, author, publicationYear, genre, isbn, coverImage, pages, price, available });
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p class="subtitle">Edit book</p>

        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

        <label>Publication Year:</label>
        <input type="text" value={publicationYear} onChange={(e) => setPublicationYear(e.target.value)} />

        <label>Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />

        <label>ISBN:</label>
        <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />

        <label>Cover Image URL:</label>
        <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />

        <label>Number of Pages:</label>
        <input type="text" value={pages} onChange={(e) => setPages(e.target.value)} />

        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label>Availability:</label>
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  Edit,
};

export default connect(null, mapDispatchToProps)(EditForm);
