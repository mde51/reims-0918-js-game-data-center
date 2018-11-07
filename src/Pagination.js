import React from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col,
  Container
} from "reactstrap";

const PreviousNext = ({ handleNextPage, handlePreviousPage, page }) => (
  <Container className="pagination">
    <Row>
      <p className="textcardlist">SORTED BY POPULARITY :</p>
      <Pagination aria-label="Page navigation example">
        <Col>
          {page !== 0 && (
            <PaginationItem>
              <PaginationLink onClick={handlePreviousPage} previous />
            </PaginationItem>
          )}
        </Col>
        <Col>
          <PaginationItem>
            <PaginationLink onClick={handleNextPage} next />
          </PaginationItem>
        </Col>
      </Pagination>
    </Row>
  </Container>
);
export default PreviousNext;
