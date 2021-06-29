import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SingleBlog = ({ blog: { _id, image, name } }) => {
  const history = useHistory();
  const handleDetail = () => {
    history.push(`/blog/${_id}`);
  };

  return (
    <Col md={4} className="mt-4">
      <Card className="p-2" onClick={handleDetail}>
        <img
          src={image}
          alt={name}
          className="img-fluid"
          style={{ height: "200px" }}
        />
        <h3 className="text-center mt-3">{name}</h3>
      </Card>
    </Col>
  );
};

export default SingleBlog;
