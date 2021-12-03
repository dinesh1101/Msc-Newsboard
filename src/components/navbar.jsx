import "../home.css";

import { Badge, Button, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import { auth } from "./firebase";

const NavBar = ({ currentUser }) => {
  // let name = currentUser.email.split("@");

  return (
    <Navbar variant="light" bg="light" expand="lg">
      <Navbar.Brand>
        {currentUser ? (
          <h6>
            Welcome &nbsp;
            <span style={{ color: "#fcb88b", fontStyle: "oblique" }}>
              {currentUser.email.split("@", 1)}
            </span>
            &nbsp; 🙏
          </h6>
        ) : (
          <h5 style={{cursor:"pointer"}}>News Dashboard</h5>
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <>
          <Nav className="ml-auto" activeKey="/">
            <Nav.Item as="li">
              <Nav.Link href="#">About us</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Contact us</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              {currentUser ? (
                <Button
                  className="mt-1"
                  variant="danger"
                  size="sm"
                  onClick={() => auth.signOut()}
                  style={{ cursor: "pointer" }}
                >
                  SignOut
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="success" size="sm" className="mt-1">
                    SignIn
                  </Button>
                </Link>
              )}
            </Nav.Item>
          </Nav>
        </>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
