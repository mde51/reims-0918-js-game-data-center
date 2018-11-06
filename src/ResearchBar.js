import React from "react";
import { Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

const ResearchBar = ({ gameSearch, onChange, onXClick }) => {
  return (
    <div>
      <InputGroup>
          <Input
            className="searchbar"
            type="search"
            name="nameSearch"
            id="idSearch"
            placeholder="Search a game !"
            value={gameSearch}
            onChange={onChange}
          />
          {gameSearch.length > 0 && (
            <InputGroupAddon addonType="append">
              <Button color="primary" onClick={onXClick} className="buttonclean">
                X
              </Button>
            </InputGroupAddon>
          )}
      </InputGroup>
    </div>
  );
};

export default ResearchBar;
