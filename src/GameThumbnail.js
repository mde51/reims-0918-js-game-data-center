import React from 'react'
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';
  
  const GameThumbnail = ({name,  cover}) => (
      <div>
        <Card>
          <CardImg src={cover} alt="Card image cap" />
          <CardBody>
            <CardTitle>{name}</CardTitle>
          </CardBody>
        </Card>
      </div>
  );

export default GameThumbnail;