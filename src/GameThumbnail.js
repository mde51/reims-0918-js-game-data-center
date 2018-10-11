import React from 'react'
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';
  
  const GameThumbnail = (props) => (
      <div>
        <Card>
          <CardImg src={props.image} />
          <CardBody>
            <CardTitle>{props.nom}</CardTitle>
          </CardBody>
        </Card>
      </div>
  );

export default GameThumbnail;