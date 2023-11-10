import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const ThreeCenteredCards = () => {
  return (
    <Row className="justify-content-center">
      <Col md={3} className="mx-2 mb-3">
        <Card>
          <Card.Img variant="top" src="https://i.ebayimg.com/thumbs/images/g/DvMAAOSw1J5bhYo-/s-l225.jpg" />
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>
              Description for Card 1.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} className="mx-2 mb-3">
        <Card>
        <Card.Img variant="top" src="https://i.ebayimg.com/thumbs/images/g/usgAAOSwqCdey-61/s-l640.jpg" />
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>
              Description for Card 1.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} className="mx-2 mb-3">
        <Card>
        <Card.Img variant="top" src="https://www.macson.es/cdnassets/thumb/631461_1_s.jpg" />
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>
              Description for Card 1.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ThreeCenteredCards;
