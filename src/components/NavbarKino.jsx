import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
 
function NavbarKino() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand >Kino-Simulator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to={`/`}>Kino</Link>
            <Link className="nav-link" to={`/generator`}>Generador</Link>
            {/* <Nav.Link href="#home">Kino</Nav.Link>
            <Nav.Link href="#link">Re-Kino</Nav.Link>
            <Nav.Link href="#link">Chanchito Regalón</Nav.Link>
            <Nav.Link href="#link">Combo Marraqueta</Nav.Link>
            <Nav.Link href="#link">Chao Jefe 1</Nav.Link>
            <Nav.Link href="#link">Chao Jefe 2</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarKino;