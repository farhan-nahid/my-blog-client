import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import SingleBlog from "../SingleBlog/SingleBlog";
import spinner from "../spinners/spinner.gif";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://ph-my-blog.herokuapp.com/all-blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <Container>
      <Row>
        {blogs.length > 0 ? (
          blogs.map((blog) => <SingleBlog key={blog._id} blog={blog} />)
        ) : (
          <div className="m-auto">
            <img
              src={spinner}
              alt="spinner"
              style={{ height: "50vh" }}
              className="img-fluid"
            />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Blogs;
