import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PreviousNext = () => (
  <Pagination aria-label="Page navigation example">
    <PaginationItem>
      <PaginationLink previous href="#" />
    </PaginationItem>

    <PaginationItem>
      <PaginationLink next href="#" />
    </PaginationItem>
  </Pagination>
);
export default PreviousNext;
