import React from 'react'
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';
  
  const GameThumbnail = () => (
      <div>
        <Card>
          <CardImg src="http://www.cosplayersandco.fr/sinmanga/sinmanga2017exposant%20(2).jpg" />
          <CardBody>
            <CardTitle>Mario Kart</CardTitle>
          </CardBody>
        </Card>
      </div>
  );

export default GameThumbnail;