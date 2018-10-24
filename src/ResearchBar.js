import React from "react";
import { Input } from "reactstrap";

const ResearchBar = ({ value, onChange }) => {
  return (
    <div>
      <Input
        type="search"
        name="nameSearch"
        id="idSearch"
        placeholder="Search a game !"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ResearchBar;
