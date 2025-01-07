import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, deleteBook }) => {
  return (
    <div style={{ marginTop: "20px", color: "lightblue" }}>
      <h2>Book List</h2>
      {books.length > 0 ? (
        <div>
          {books.map((book, index) => (
            <BookCard key={index} book={book} index={index} deleteBook={deleteBook} />
          ))}
        </div>
      ) : (
        <p>No books available. Add a new book!</p>
      )}
    </div>
  );
};

export default BookList;
