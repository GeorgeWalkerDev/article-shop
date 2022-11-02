import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Contact from '../components/Contact'

const Footer = () => {
  return (
    <Container className='footer'>
        <Row className="footer-row">
            <Col><img src={require('../images/clothing-items-2.jpg')} alt="Clothing items" /></Col>
            <Col>
                <Form className="justify-center py-5 lg:py-20 px-4 lg:px-0 lg:pr-10 w-full lg:basis-6/12 lg:min-h-1/2vh">
                    <h3 className="mb-3">Connect with us</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className="mb-2" type="text" placeholder="Name" />
                        <Form.Control className="mb-2" type="email" placeholder="Enter email" />
                        <Form.Control className="mb-2" type="text" placeholder="Message" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
        <Row className="contact my-4">
            <img src={require('../images/article-logo/png/logo-no-background.png')} alt="Logo" />
            <Contact />
        </Row>
    </Container>
  )
}

export default Footer