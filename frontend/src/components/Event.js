import React from "react";
import { Card } from "react-bootstrap";

const Event = ({ event }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <a href={`/event/${event._id}`}>
            <Card.Img src={event.image} variant="top" />
        </a> 

        <Card.Body>
        <a href={`/event/${event._id}`}>
            <Card.Title as="div" class="eventName">
                <strong>{event.name}</strong>
            </Card.Title>        
        </a>
        
        <Card.Text as="h6">{event.Date}</Card.Text>
        <Card.Text as="h6">{event.Time}</Card.Text>
        <Card.Text as="h6">{event.Address}</Card.Text>        
      
      </Card.Body>
    
    </Card>
  );
};

export default Event;
