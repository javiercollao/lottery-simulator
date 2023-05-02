import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarKino() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Kino-Analytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Kino</Nav.Link>
            <Nav.Link href="#link">Re-Kino</Nav.Link>
            <Nav.Link href="#link">Chanchito Regalón</Nav.Link>
            <Nav.Link href="#link">Combo Marraqueta</Nav.Link>
            <Nav.Link href="#link">Chao Jefe 1</Nav.Link>
            <Nav.Link href="#link">Chao Jefe 2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarKino;