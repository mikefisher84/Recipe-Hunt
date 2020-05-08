import React from 'react';
import ResultItem from './ResultItem';
import {Card} from 'semantic-ui-react'

const ResultList = ({searchResults}) => {
  if (!searchResults) return <></>
  return (
    <div>
      <Card.Group itemsPerRow={3} stackable>
        {searchResults.map((result, i) => (
          <ResultItem {...result} /> 
        ))}

      </Card.Group>

    </div>
  );
}

export default ResultList;
