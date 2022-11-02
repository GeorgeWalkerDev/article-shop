import React, { useEffect } from 'react'
import {useState} from 'react'
import { Container, Row, Col, Spinner, ListGroup, Form, Button } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'

const SidebarBasket = ({cart, deleteFromCart, updateCart}) => {
  const [cartItems, setCartItems] = useState([])
  const [subTotal, setSubtotal] = useState(0)
  const [quantity, setQuantity] = useState([])

  useEffect(() => {
    if (cart.length > 0) {
      const cartData = cart.map(item => {
        const data = fetch(`https://fakestoreapi.com/products/${item.productID}`)
              .then(res => res.json())
              .then(data => {
                return data
            })
            return data
          })
        //Convert returned array of promises to objects then set to cartItems and subTotal state
        Promise.all(cartData).then(values => {
          setCartItems(values)
          setSubtotal(values.reduce((prev,acc,i) => prev += (acc.price * cart[i].quantity), 0).toFixed(2))
        })
        setQuantity(cart.map(item => item.quantity))
    }

  },[cart])

  //Update quantity event handler
  const onSubmit = (e, id) =>{
    e.preventDefault()
    const updateQty = document.getElementById(`${id}`).value;
    updateCart(id, updateQty)
  }

  //Delete from cart click handler
  const onClick = (id) => {
    deleteFromCart(id)
  }

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
                      <Form id="updateQtyForm" onSubmit={(e) => onSubmit(e, item.id)}>
                          <Form.Group>
                            <Form.Label className="mb-3">Qty:</Form.Label>
                            <Form.Select defaultValue={quantity[i]} id={item.id} className="ms-3" style={{width: '60px'}}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                            </Form.Select>
                            <Button className="me-3" variant="primary" type="submit">Update</Button>
                            <FaTrashAlt onClick={() => onClick(item.id)} style={{cursor: 'pointer'}}/>
                          </Form.Group>
                      </Form>
                  </Col>
              </Row>
            </ListGroup.Item>
          )
        })}
        <ListGroup.Item>Subtotal: £{subTotal}</ListGroup.Item>
        </ListGroup>
      </Container>
    )
  }
}

export default SidebarBasket