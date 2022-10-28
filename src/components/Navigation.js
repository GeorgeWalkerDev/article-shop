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
              <NavDropdown.Item href="#action/3.1">Mens</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Womens
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link id="sidebarBasket"><FaShoppingBasket /></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation