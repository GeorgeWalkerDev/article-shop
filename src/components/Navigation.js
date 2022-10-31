import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingBasket } from 'react-icons/fa'

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Article.</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            <NavDropdown title="By Category" id="basic-nav-dropdown">
              <LinkContainer to="/category/men's%20clothing">
                <NavDropdown.Item>Mens</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/women's%20clothing">
                <NavDropdown.Item>Womens</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/electronics">
                <NavDropdown.Item>Electronics</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/jewelery">
                <NavDropdown.Item>Jewellery</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav.Link id="sidebarBasket"><FaShoppingBasket /></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation