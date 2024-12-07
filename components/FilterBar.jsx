import React from 'react';

const FilterBar = ({ categories, onFilter }) => {
  return (
    <div className="filter-dropdown">
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
