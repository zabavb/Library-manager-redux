import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Add } from '../redux/actions/componentActions';

function AddForm({ Add }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [genre, setGenre] = useState('');
  const [isbn, setIsbn] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [pages, setPages] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    Add({ title, author, publicationYear, genre, isbn, description, coverImage, pages, price, available });
    setTitle('');
    setAuthor('');
    setPublicationYear('');
    setGenre('');
    setIsbn('');
    setDescription('');
    setCoverImage('');
    setPages('');
    setPrice('');
    setAvailable(true);
  };

  return (
    <div>
      <form class="form" onSubmit={handleSubmit}>
        <p class="subtitle">Add book</p>

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

        <label>Availability:
          <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  Add,
};

export default connect(null, mapDispatchToProps)(AddForm);
