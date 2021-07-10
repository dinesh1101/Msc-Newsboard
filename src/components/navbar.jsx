import { auth } from "./firebase";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button, Badge } from "react-bootstrap";
import "../home.css";

const NavBar = ({ currentUser }) => {
  // let name = currentUser.email.split("@");

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
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
          <h5>SignIn to continue</h5>
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
