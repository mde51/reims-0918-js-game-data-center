import React from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col,
  Container
} from "reactstrap";

const PreviousNextFavs = ({ handleNextFavsPage, handlePreviousFavsPage, favPage }) => (
  <Container className="pagination">
    <Row>
      <Pagination aria-label="Page navigation example">
        <Col>
          {favPage !== 0 && (
            <PaginationItem>
              <PaginationLink onClick={handlePreviousFavsPage} previous />
            </PaginationItem>
          )}
        </Col>
        <Col>
          <PaginationItem>
            <PaginationLink onClick={handleNextFavsPage} next />
          </PaginationItem>
        </Col>
      </Pagination>
    </Row>
  </Container>
);
export default PreviousNextFavs;