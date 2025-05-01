import React from 'react';

function FilterBar({ onFilter, filters }) {
  const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  return (
    <div className="filter-bar">
      <h3>Filter By Class:</h3>
      {classes.map(botClass => (
        <label key={botClass}>
          <input
            type="checkbox"
            checked={filters[botClass]}
            onChange={() => onFilter(botClass)}
          />
          {botClass}
        </label>
      ))}
    </div>
  );
}

export default FilterBar;