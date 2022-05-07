import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import axios from 'axios'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listEventDetails } from '../actions/eventActions'

const EventScreen = () => {
  const [qty, setQty] = useState(0);
  const params = useParams ();
  const dispatch = useDispatch()
  const eventDetails = useSelector((state) => state.
  eventDetails)
  const { loading, error, event } = eventDetails

  useEffect(() => {
   dispatch(listEventDetails(params.id))
  }, [dispatch, params])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={event.image} alt={event.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{event.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${event.price}</ListGroup.Item>
            <ListGroup.Item>Description: {event.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${event.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {event.countInStock > 0 ? 'Available' : 'Sold Out'}
                  </Col>
                </Row>
              </ListGroup.Item>

              {event.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                    <Form.Control
                    as='select'
                    value={qty}
                    >

                      </Form.Control></Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={event.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default EventScreen