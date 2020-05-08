import React from 'react';
import ResultItem from './ResultItem';
import { Card} from 'semantic-ui-react'

const ResultList = ({searchResults}) => {
  if (!searchResults) return <></>
  return (
    <div>
      <Card.Group itemsPerRow={4}>
        {searchResults.map((result, i) => (
          <ResultItem key={i} {...result} /> 
        ))}
      </Card.Group>

    </div>
  );
}

export default ResultList;
