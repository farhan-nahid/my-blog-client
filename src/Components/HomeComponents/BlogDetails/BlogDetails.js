import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Footer from "../../SharedComponents/Footer/Footer";
import NavBar from "../../SharedComponents/NavBar/NavBar";
import spinner from "../spinners/spinner.gif";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ph-my-blog.herokuapp.com/all-blogs/${id}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((error) => toast.error(error.message));
  }, [id]);
  console.log(blog);

  return (
    <>
      <NavBar />
      {blog._id ? (
        <div>
          {" "}
          <img
            src={blog.image}
            alt={blog.name}
            style={{ height: "300px", width: "100%" }}
            className="img-fluid"
          />
          <h1 className="text-center">{blog.name}</h1>
          <p className="text-muted mt-4">{blog.description}</p>
        </div>
      ) : (
        <div className="m-auto text-center">
          <img
            src={spinner}
            alt="spinner"
            style={{ height: "50vh" }}
            className="img-fluid"
          />
        </div>
      )}

      <Footer />
    </>
  );
};

export default BlogDetails;
