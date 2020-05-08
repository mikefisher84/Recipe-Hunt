import React from 'react';
import {Input} from 'semantic-ui-react';

const SearchInput = ({updateSearchTerm, isSearching}) => {
  return (
    <div>
      <Input loading={isSearching} type="text" placeholder="What would you like?" onChange={(e) => updateSearchTerm(e.target.value)} />
    </div>
  );
}

export default SearchInput;
