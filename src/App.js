import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductPage from './pages/ProductPage'
import Category from './pages/Category'
import Navigation from './components/Navigation'
import SidebarBasket from './components/SidebarBasket'
import {Container, Row, Col} from 'react-bootstrap'
import { useState, useEffect} from 'react'

function App() {
  const [sidebar, setSidebar] = useState(false)
  const [cart, setCart] = useState([{productID: 1, quantity: 3},{productID: 2, quantity: 1}])

  useEffect(() => {
    const toggleSidebar = () => {
      setSidebar(() => !sidebar)
    }

    const basket = document.querySelector('#sidebarBasket')
    basket.addEventListener('click', toggleSidebar)
    return () => basket.removeEventListener('click', toggleSidebar)
  }, [sidebar])

  const addToCart = (id, qty) => {
    if (cart.some(item => item.productID === id)){
      setCart(cart.map(item => item.productID === id ? {productID: id, quantity: (item.quantity + qty)} : item))
    } else {
      const newItem = {productID: id, quantity: qty}
      setCart([...cart, newItem])
    }
  }

  const updateCart = (id, newQty) => {
    const updatedItem = {productID: id, quantity: newQty}
    const filteredCart = cart.filter(item => item.productID !== id);
    const updatedCart = [...filteredCart, updatedItem].sort((a,b) => a.productID - b.productID)
    setCart(updatedCart)
  }

  const deleteFromCart = (id) => {
    const filtered = cart.filter(item => item.productID !== id)
    setCart(filtered)
  }

  return (
    <Router>
      <Container fluid className="main">
        <Navigation />
        <Row>
          <Col xs={sidebar ? 8 : 0}>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/shop' element={<Shop />}/>
              <Route path='/shop/:id' element={<ProductPage addToCart={addToCart}/>}/>
              <Route path='/category/:category' element={<Category />}/>
            </Routes>
          </Col>
          {sidebar ?
          <Col className="sidebar">
            <SidebarBasket cart={cart} deleteFromCart={deleteFromCart} updateCart={updateCart}/>
          </Col> :
          null}

        </Row>

      </Container>
    </Router>
  );
}

export default App;
