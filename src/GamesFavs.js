import React from "react";

import { CardColumns, CardBody, CardTitle } from "reactstrap";

const GamesFavs = ({ name }) => (
  <section>
    <CardColumns className="mt-3">
      <div>
        <CardBody>
          <CardTitle>{name}</CardTitle>
        </CardBody>
      </div>
    </CardColumns>
  </section>
);

export default GamesFavs;
