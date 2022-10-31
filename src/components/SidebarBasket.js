import React, { useEffect } from 'react'
import {useState} from 'react'
import { Container, Row, Col, Spinner, ListGroup, Form, Button } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'

const SidebarBasket = ({cart, deleteFromCart}) => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const cartData = cart.map(item => {
      const data = fetch(`https://fakestoreapi.com/products/${item.productID}`)
            .then(res => res.json())
            .then(data => {
              return data
          })
          return data
        })
      //Convert returned array of promises to objects then set to cartItems state
      Promise.all(cartData).then(values => setCartItems(values))
  },[cart])


  //Sum subtotal price of items in cart
  const subtotal = cartItems.reduce((prev,acc,i) => prev += (acc.price * cart[i].quantity), 0).toFixed(2);

  //Render cart: conditional to ensure API has fetched data prior to render.
  if (cart.length === 0) {
    return (
      <p>Cart is empty</p>
    )
  } else if (cartItems.length < cart.length) { 
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  } else {
    return (
      <Container className="sidebar my-2">
      <h3 className="my-3">Basket</h3>
        <ListGroup>
        {cartItems.map((item, i) => {
          const quantity = cart[i].quantity;
          return (
            <ListGroup.Item className="py-4" key={item.id}>
              <Row>
                  <Col xs={4}><img src={item.image} alt={item.title}/></Col>
                  <Col xs={8}>
                      <h6>{item.title}</h6>
                      <p>Price: £{item.price.toFixed(2)}</p>
                      <Form id="updateQtyForm">
                          <Form.Group>
                            <Form.Label className="mb-3">Qty:</Form.Label>
                            <Form.Select defaultValue={quantity} id="quantityUpdate" className="ms-3" style={{width: '60px'}}>
                                <option id="1" value='1'>1</option>
                                <option id="2" value='2'>2</option>
                                <option id="3" value='3'>3</option>
                                <option id="4" value='4'>4</option>
                                <option id="5" value='5'>5</option>
                                <option id="6" value='6'>6</option>
                                <option id="7" value='7'>7</option>
                                <option id="8" value='8'>8</option>
                            </Form.Select>
                            <Button className="me-3" variant="primary" type="submit">Update</Button>
                            <FaTrashAlt style={{cursor: 'pointer'}}/>
                          </Form.Group>
                      </Form>
                  </Col>
              </Row>
            </ListGroup.Item>
          )
        })}
        <ListGroup.Item>Subtotal: £{subtotal}</ListGroup.Item>
        </ListGroup>
      </Container>
    )
  }




}

export default SidebarBasket