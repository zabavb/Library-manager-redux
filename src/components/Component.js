import React from 'react';
function Book({ book }) {
  return (
    <li class="propertyPosition">
      <span>Cover Image:</span> <img src={book.coverImage} /><br />

      <p class="property"><span>Title:</span> {book.title}</p><br />
      <p class="property"><span>Author:</span> {book.author}</p><br />
      <p class="property"><span>Publication year:</span> {book.publicationYear}</p><br />
      <p class="property"><span>Genre:</span> {book.genre}</p><br />
      <p class="property"><span>ISBN:</span> {book.isbn}</p><br />
      <p class="property"><span>Pages:</span> {book.pages}</p><br />
      <p class="property"><span>Price:</span> {book.price}</p><br />
      <p class="property"><span>Availability:</span> {book.available ? 'Available' : 'Not available'}</p>
    </li>
  );
}

export default Book;
