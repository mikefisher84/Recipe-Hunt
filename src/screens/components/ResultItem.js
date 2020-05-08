import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const ResultItem = ({title, href, ingredients, thumbnail}) => {
  // A lot of these recipes don't have thumbnails so I created a fake image component that just returns food from lorem pixel
  return (
    <>
    <Card>
      
      {thumbnail ? <Image src={thumbnail} wrapped ui={false} alt={title}/> : <Image src='http://lorempixel.com/247/185/food/' alt="placeholder food"/>}
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>Ingredients</span>
        </Card.Meta>
        <Card.Description>
          {ingredients}
        </Card.Description>

        </Card.Content>
    </Card>
    </>

  );
}

export default ResultItem;
