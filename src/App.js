import React, { useState } from "react";
import BookList from "./components/Booklist";
import AddBookForm from "./components/AddBookform";
import SearchBar from "./components/Searchbar";
import './styles/App.css'

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (indexToDelete) => {
    setBooks(books.filter((_, index) => index !== indexToDelete));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Library Management System</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <AddBookForm addBook={addBook} />
      <BookList books={filteredBooks} deleteBook={deleteBook} />
    </div>
  );
};

export default App;