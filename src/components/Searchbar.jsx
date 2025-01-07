import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <input
        style={{ height: "20px", width: "15%" }}
        type="text"
        placeholder="Search books by title..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
