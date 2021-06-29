import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { SignInContext } from "../../../App";

const Profile = () => {
  const [loggedInUser] = useContext(SignInContext);

  return (
    <Container>
      <div className="text-center add-blog shadow rounded py-5">
        <h4>User Email: {loggedInUser.email}</h4>
      </div>
    </Container>
  );
};

export default Profile;
