import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ShoppingCart from './pages/ShoppingCart'
import Navigation from './components/Navigation'
import SidebarBasket from './components/SidebarBasket'
import ProductPage from './pages/ProductPage'
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
    const newItem = {productID: id, quantity: qty}
    setCart([...cart, newItem])
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
              <Route path='/cart' element={<ShoppingCart cart={cart} deleteFromCart={deleteFromCart}/>}/>
            </Routes>
          </Col>
          {sidebar ?
          <Col className="sidebar">
            <SidebarBasket cart={cart} deleteFromCart={deleteFromCart}/>
          </Col> :
          null}

        </Row>

      </Container>
    </Router>
  );
}

export default App;
