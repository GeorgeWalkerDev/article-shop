import React, { useEffect } from 'react'
import { Container, Image, Row, Col, Spinner  } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {useState} from 'react'

const ProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])
    
    if (!product) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    } else {
        return (
            <Container>
                <Row>
                    <Col>
                        <Image fluid src={product.image}/>
                    </Col>
                    <Col>
                        <h2>{product.title}</h2>
                        <h3>£{product.price}</h3>
                        <p>Rated: {product.rating.rate} ({product.rating.count})</p>
                        <p>{product.description}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
    
}

export default ProductPage