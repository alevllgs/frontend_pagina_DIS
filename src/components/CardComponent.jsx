// src/components/CardComponent.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CardComponent = ({ card }) => (
  <Card style={{ width: '18rem' }} className="card-item">
    <Card.Img variant="top" src={card.imgSrc} className="card-image" />
    <Card.Body>
      <Card.Title>{card.title}</Card.Title>
      <Card.Text>{card.text}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      {card.listItems.map((item, index) => (
        <ListGroup.Item key={index}>{item}</ListGroup.Item>
      ))}
    </ListGroup>
    <Card.Body>
      {card.links.map((link, index) => (
        <Card.Link href={link} key={index}>Card Link {index + 1}</Card.Link>
      ))}
    </Card.Body>
  </Card>
);

export default CardComponent;
