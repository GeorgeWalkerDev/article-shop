import React, { useEffect } from 'react'
import {useState} from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

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
      Promise.all(cartData).then(values => setCartItems(values))
  },[cart])

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
    console.log(cartItems)
    return (
      <Container>
      <h3>Basket</h3>
      {cartItems.map((item, i) => {
        return (
            <Row key={item.id}>
                <Col xs={4}><img src={item.image} alt={item.title}/></Col>
                <Col xs={8}>
                    <h6>{item.title}</h6>
                    <p>Price: £{item.price.toFixed(2)}</p>
                    <p>Qty: {cart[i].quantity}</p>
                </Col>
            </Row>
        )
      })}
      </Container>
    )
  }




}

export default SidebarBasket