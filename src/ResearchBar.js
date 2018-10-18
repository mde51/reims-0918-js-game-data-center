import React from "react";
import { Input } from "reactstrap";

const ResearchBar = ({ value, onChange }) => {
  return (
    <div>
      <Input
        type="search"
        name="nameSearch"
        id="idSearch"
        placeholder="Write your game here !"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ResearchBar;
