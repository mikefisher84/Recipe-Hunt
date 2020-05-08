import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const ResultItem = ({title, href, ingredients, thumbnail}) => {
  return (
    <>
    <Card>
      {thumbnail ? <Image src={thumbnail} wrapped ui={false} alt={title}/> : null}
      <Card.Header>{title}</Card.Header>
      <span>{ingredients}</span>
    </Card>
    </>

  );
}

export default ResultItem;
