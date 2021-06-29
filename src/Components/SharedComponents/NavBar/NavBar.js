import firebase from "firebase/app";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { SignInContext } from "../../../App";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(SignInContext);
  const handelSignOut = () => {
    const loading = toast.loading("logging out...Please wait!");
    firebase
      .auth()
      .signOut()
      .then((res) => {
        toast.dismiss(loading);
        toast.error("Logged Out!");
        const signOutUser = {
          loggedInUser: false,
          name: "",
        };
        setLoggedInUser(signOutUser);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            {loggedInUser.email && loggedInUser.password ? (
              <Button variant="danger" onClick={handelSignOut}>
                Logout
              </Button>
            ) : (
              <Button variant="info" as={Link} to="/login">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
