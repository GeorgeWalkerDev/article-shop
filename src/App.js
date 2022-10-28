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

  useEffect(() => {
    const toggleSidebar = () => {
      setSidebar(() => !sidebar)
    }

    const basket = document.querySelector('#sidebarBasket')
    basket.addEventListener('click', toggleSidebar)
    return () => basket.removeEventListener('click', toggleSidebar)
  }, [sidebar])

  return (
    <Router>
      <Container fluid className="main">
        <Navigation />
        <Row>
          <Col xs={sidebar ? 8 : 0}>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/shop' element={<Shop />}/>
              <Route path='/shop/:id' element={<ProductPage />}/>
              <Route path='/cart' element={<ShoppingCart />}/>
            </Routes>
          </Col>
          {sidebar ?
          <Col className="sidebar">
            <SidebarBasket/>
          </Col> :
          null}

        </Row>

      </Container>
    </Router>
  );
}

export default App;
