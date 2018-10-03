import React from 'react'
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';
  
  const GamesThumbnail = () => (
      <div>
        <Card>
          <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
          </CardBody>
        </Card>
      </div>
  );

export default GamesThumbnail;