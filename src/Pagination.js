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
      <Col>
        <p className="textcardlist mt-5">SORTED BY POPULARITY :</p>
      </Col>
      <Pagination aria-label="Page navigation example" className="mb-5">
        {page !== 0 && (
          <Col>
            <PaginationItem>
              <PaginationLink onClick={handlePreviousPage} previous />
            </PaginationItem>
          </Col>
        )}
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
