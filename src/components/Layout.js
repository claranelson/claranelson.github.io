import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Resume from '../resources/Clara_Nelson_Resume.pdf';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-light mb-3">
      <Container>
        <Navbar.Brand>Clara Nelson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="menuItems">
          <Nav className="navbar-nav">
              <Nav.Link className="nav-link nav-item" href="/">Home</Nav.Link>
              <Nav.Link className="nav-link" href="/experience">Experience</Nav.Link>
              <Nav.Link className="nav-link" href="education">Education</Nav.Link>
              <Nav.Link className="nav-link" href={Resume} target = "_blank">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    <Outlet />
    </>


  )
}
export default Layout;