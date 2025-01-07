import React from "react";

const BookCard = ({ book, index, deleteBook }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <button
        onClick={() => deleteBook(index)}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default BookCard;
