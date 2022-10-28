import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const SidebarBasket = () => {
  return (
    <Container>
        <h3>Basket</h3>
        <Row>
            <Col xs={4}><img src="https://images.thenorthface.com/is/image/TheNorthFaceEU/4959_M19_hero?$94x94$" alt="North Face Jacket"/></Col>
            <Col xs={8}>
                <h6>North Face Jacket</h6>
                <p>Price</p>
                <p>Qty: 2</p>
            </Col>
        </Row>
    </Container>
  )
}

export default SidebarBasket