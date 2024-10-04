// src/Home.js
import React, { useEffect, useState } from "react";
import web from "../src/images/homepage1.jpg";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Ensure your CSS is included
import Common from "./common";

const Home = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blog posts
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors
  const [selectedBlog, setSelectedBlog] = useState(null); // State for the selected blog for modal
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Fetch blog posts from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30");
        setBlogs(response.data.blogs); // Assuming the API returns an array of blogs
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to handle showing modal with selected blog details
  const handleShowModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  return (
    <>
      <section id="home" className="home">
        <Common
          name="Grow your Business with " 
          imgsrc={web} 
          visit="/service" 
          btname="Get Started" 
        />
        
      </section>

      {/* Blog Section with ID for navigation */}
      <section id="latestblogs" className="blogs">
        <h1 className="text-center"><strong>Latest Blog Posts</strong></h1>
        {loading ? (
          <p>Loading blogs...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="d-flex flex-wrap justify-content-center">
            {blogs.map((blog) => (
              <div key={blog.id} className="card m-3" style={{ width: '18rem' }}>
                <img src={blog.photo_url} className="card-img-top" alt={blog.title} />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                  <Button variant="primary" onClick={() => handleShowModal(blog)}>
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal for Blog Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBlog?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedBlog?.photo_url} alt={selectedBlog?.title} className="img-fluid my-3" />
          <p><strong>Category:</strong> {selectedBlog?.category}</p>
          <p><strong>Created At:</strong> {selectedBlog ? new Date(selectedBlog.created_at).toLocaleDateString() : ''}</p>
          <div dangerouslySetInnerHTML={{ __html: selectedBlog?.content_html }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
