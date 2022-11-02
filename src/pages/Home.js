import React from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <Container className="section1">
      <Row>
          <Col className="items-start justify-center py-5 lg:py-20 px-4 lg:px-0 lg:pr-10 w-full lg:basis-6/12 lg:min-h-1/2vh">
            <h2>Explore our Products</h2>
            <p>Check out our store and find the right fit for you</p>
            <LinkContainer to='/shop'><Button>All the products</Button></LinkContainer>
          </Col>
          <Col>
            <img src={require("../images/clothing-items.jpg")} alt='Clothing items'/>
          </Col>
      </Row>
    </Container>
    <Footer />
    </>

  )
}

export default Home