import React, { useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import {useState} from 'react'

const Shop = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(`Error: ${err}`))
    },[])

    if (!products){
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    } else {
        return (
            <Container className="d-flex flex-wrap justify-content-center">
                {products.map(product => <ProductCard key={product.id} product={product}/>)}
            </Container>
        )
    }

}

export default Shop