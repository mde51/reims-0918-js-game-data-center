import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";


const PreviousNext = ({ handleNextPage, handlePreviousPage}) => (
  <Pagination aria-label="Page navigation example">
    <PaginationItem>
      <PaginationLink onClick={handlePreviousPage} previous href="#" />
    </PaginationItem>

    <PaginationItem>
      <PaginationLink onClick={handleNextPage} next href="#" />
    </PaginationItem>
  </Pagination>
);
export default PreviousNext;
