import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => {
  // Function to handle the Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search blogs..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyPress}  // event listener for Enter key
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
