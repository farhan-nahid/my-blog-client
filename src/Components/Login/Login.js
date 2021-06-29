import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useHistory, useLocation } from "react-router-dom";
import { SignInContext } from "../../App";
import { firebaseConfig } from "./firebaseConfig";
import "./Login.css";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(SignInContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || {
    from: { pathname: "/dashboard/profile" },
  };

  // input email value

  const handleEmail = (e) => {
    const addEmail = { ...loggedInUser };
    addEmail.email = e.target.value;
    setLoggedInUser(addEmail);
  };

  // input password value

  const handlePassword = (e) => {
    const addPassword = { ...loggedInUser };
    addPassword.password = e.target.value;
    setLoggedInUser(addPassword);
  };

  // login

  const handleLogin = (e) => {
    const loading = toast.loading("logging in...Please wait!");
    if (loggedInUser.email && loggedInUser.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then((userCredential) => {
          toast.dismiss(loading);
          toast.success("Successfully Logged In!");
          const userLoggedIn = { ...loggedInUser };
          userLoggedIn.isSignedIn = true;
          setLoggedInUser(userLoggedIn);
          history.replace(from);
        })
        .catch((error) => {
          toast.dismiss(loading);
          toast.error(error.message);
        });
      e.preventDefault();
    }
  };

  return (
    <Container>
      <h1>Admin Login</h1>
      <Form onSubmit={handleLogin} className="mt-3">
        <Form.Control
          className="input-field"
          type="text"
          name="email"
          onBlur={handleEmail}
          placeholder="Enter Your Email"
          required
        />
        <br />
        <Form.Control
          className="input-field"
          type="password"
          name="password"
          onBlur={handlePassword}
          placeholder="Enter Your Password"
          required
        />
        <br />
        <Button variant="success" type="submit" value="Login">
          {" "}
          Login{" "}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
