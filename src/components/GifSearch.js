import React, { useState } from 'react';

function GifSearch({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search for GIFs:
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Find Gif</button>
    </form>
  );
}

export default GifSearch;
