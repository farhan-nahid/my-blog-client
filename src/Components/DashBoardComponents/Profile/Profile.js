import firebase from "firebase/app";
import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { SignInContext } from "../../../App";

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(SignInContext);
  const handelSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          loggedInUser: false,
          name: "",
        };
        setLoggedInUser(signOutUser);
      })
      .catch((err) => {});
  };
  return (
    <Container>
      <h4>{loggedInUser.email}</h4>
      <p>{loggedInUser.password}</p>
      <Button variant="danger" onClick={handelSignOut}>
        Logout
      </Button>
    </Container>
  );
};

export default Profile;
