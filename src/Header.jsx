import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid className="p-5 bg-light">
      <Row>
        <Col>
          <h1 className="display-4">Harshvardhan Jaiswal</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
