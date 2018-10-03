import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

const Example = () => {
  return (
    <Form>
      <FormGroup>
        <Input
          type="search"
          name="nameSearch"
          id="idSearch"
          placeholder="Write your game here !"
        />
      </FormGroup>
      <Button class="btn btn-outline-success" type="submit">Search</Button>
    </Form>
  );
};

export default Example;
