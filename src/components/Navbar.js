import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Resume from '../resources/Clara_Nelson_Resume.pdf';

const CustomNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-light mb-3">
        <Container>
          <Navbar.Brand href="/">Clara Nelson</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="menuItems">
            <Nav className="navbar-nav">
              <Nav.Link className="nav-link nav-item" href="/">Home</Nav.Link>
              <Nav.Link className="nav-link" href="/#/experience">Experience</Nav.Link>
              <Nav.Link className="nav-link" href="/#/education">Education</Nav.Link>
              <Nav.Link className="nav-link" href={Resume} target="_blank">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </>


  )
}
export default CustomNavbar;