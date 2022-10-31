import React, { useEffect } from 'react'
import { Container, Image, Row, Col, Spinner, Button, Form  } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {useState} from 'react'

const ProductPage = ({ addToCart }) => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    //Fetch product data based on ID passed from previous page click
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])

    //Submit event handler for adding item to cart
    const onSubmit = (e) => {
        e.preventDefault()
        const quantityValue = document.querySelector('#quantityInput').value;
        addToCart(+id, +quantityValue)
    }
    
    //Conditional logic to ensure item data has been fetched from API
    if (!product) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    } else {
        return (
            <Container className="my-4 px-4">
                <Row>
                    <Col>
                        <Image fluid src={product.image}/>
                    </Col>
                    <Col>
                        <h2>{product.title}</h2>
                        <h3>£{product.price}</h3>
                        <p>Rated: {product.rating.rate} ({product.rating.count})</p>
                        <p>{product.description}</p>
                        <Form id="productForm" onSubmit={e => onSubmit(e)}>
                            <Form.Select id="quantityInput">
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                            </Form.Select>
                            <Button variant="primary" type="submit">Add to Basket</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
    
}

export default ProductPage