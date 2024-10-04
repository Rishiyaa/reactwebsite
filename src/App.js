import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";

import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const blogAPI = "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30";

  const location = useLocation();

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(blogAPI);
        const data = await response.json();
        setBlogs(data.blogs || []); // Ensure blogs is set correctly
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Scroll to the latest blog section if the URL has the hash
  useEffect(() => {
    if (location.hash === "#latestblogs") {
      const element = document.getElementById("latestblogs");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home blogs={blogs} />} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
