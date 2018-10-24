import React from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col,
  Container,
  Button
} from "reactstrap";

const PreviousNext = ({ handleNextPage, handlePreviousPage, page }) => (
  <Container>
    <Row>
      <Pagination aria-label="Page navigation example">
        <Col>
          {page !== 0 && (
            <PaginationItem>
              <Button color="primary">
                <PaginationLink onClick={handlePreviousPage} previous />
              </Button>
            </PaginationItem>
          )}
        </Col>
        <Col>
          <PaginationItem>
            <Button color="primary">
              <PaginationLink onClick={handleNextPage} next />
            </Button>
          </PaginationItem>
        </Col>
      </Pagination>
    </Row>
  </Container>
);
export default PreviousNext;
