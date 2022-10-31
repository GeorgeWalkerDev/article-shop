import React, { useEffect } from 'react'
import {useState} from 'react'
import { Container, Row, Col, Spinner, ListGroup } from 'react-bootstrap'

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
  console.log(cartItems)


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
          return (
            <ListGroup.Item className="py-4" key={item.id}>
              <Row>
                  <Col xs={4}><img src={item.image} alt={item.title}/></Col>
                  <Col xs={8}>
                      <h6>{item.title}</h6>
                      <p>Price: £{item.price.toFixed(2)}</p>
                      <p>Qty: {cart[i].quantity}</p>
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