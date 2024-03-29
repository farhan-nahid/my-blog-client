import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";

const goBack = () => window.history.back();

const NotFound = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center"
      style={{ height: "100vh" }}
    >
      <div style={{ border: "1px solid gray", padding: "30px" }}>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Button variant="info" onClick={goBack} to="/">
          <FontAwesomeIcon className="mr-2" icon={faArrowLeft} />
          Back To Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
