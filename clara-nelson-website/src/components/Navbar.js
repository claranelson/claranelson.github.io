import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="#home">Clara Nelson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="menuItems">
          <Nav className="navbar-nav">
              <Nav.Link className="nav-link nav-item" to="/">Home</Nav.Link>
              <Nav.Link className="nav-link" to="/experience">Experience</Nav.Link>
              <Nav.Link className="nav-link" to="/education">Education</Nav.Link>
              <Nav.Link className="nav-link" to="/aboutme">About Me</Nav.Link>
              <Nav.Link className="nav-link" to="./Clara_Nelson_Resume.pdf">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>

  )
}
export default CustomNavbar;