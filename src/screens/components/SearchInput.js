import React from 'react';

const SearchInput = ({updateSearchTerm}) => {
  return (
    <div>
      <input type="text" placeholder="what kind of recipe do you want?" onChange={(e) => updateSearchTerm(e.target.value)} />
    </div>
  );
}

export default SearchInput;
