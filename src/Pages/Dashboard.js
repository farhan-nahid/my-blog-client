import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddBlog from "../Components/DashBoardComponents/AddBlog/AddBlog";
import ManageBlog from "../Components/DashBoardComponents/ManageBlog/ManageBlog";
import Sidebar from "../Components/DashBoardComponents/Sidebar/Sidebar";
import NavBar from "../Components/SharedComponents/NavBar/NavBar";

const Dashboard = () => {
  const { panel } = useParams();
  return (
    <>
      <NavBar />
      <Row>
        <Col md={2}>
          <Sidebar panel={panel} />
        </Col>
        <Col md={9}>
          <Container>
            {
              // Sidebar items
              panel === "profile" ? (
                <h3>Profile</h3>
              ) : panel === "add-blog" ? (
                <AddBlog />
              ) : panel === "manage-blog" ? (
                <ManageBlog />
              ) : null
            }
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
