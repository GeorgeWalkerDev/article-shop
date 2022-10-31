import React, { useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import {useState} from 'react'

const Category = () => {
    const [products, setProducts] = useState(null)
    const { category } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(`Error: ${err}`))
    },[category])

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

export default Category