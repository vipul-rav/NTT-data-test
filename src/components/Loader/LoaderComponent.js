import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const LoaderComponent = () => (
  <Container>
    <Row>
      <Col>
        <Spinner animation="border" />
      </Col>
    </Row>
  </Container>
);

export { LoaderComponent };
