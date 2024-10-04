import React from "react";
import web from "../src/images/homepage2.png"; // Main image for the Common component
import Common from "./common"; // Assuming you have a Common component
import './index.css'; // Import custom CSS for About page

const About = () => {
  return (
    <>
      <div className="container my-5">
        {/* Hero Section */}
        <section className="hero mb-5 text-center p-5 bg-light">
          
          <h1 className="animated-text" style={{ color: '#165fcc' }}> {/* Change the color code here */}
          <strong>{
    "Welcome to ABC Company".split("").map((char, index) => (
      <span key={index} style={{ whiteSpace: 'pre' }}>{char}</span>
    ))
  }
  </strong>
</h1>

          

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <img src={web} alt="Fashion" className="img-fluid rounded mb-4 animated-img" />
        </section>

        {/* Who We Are Section */}
        <section className="mb-5 p-5 bg-custom-warning">
          <h2 className="text-center">
            <strong>
              <span className="animated-who-we-are">
                <span>W</span>
                <span>h</span>
                <span>o</span>
                <span className="word-space"> </span>
                <span>W</span>
                <span>e</span>
                <span className="word-space"> </span>
                <span>A</span>
                <span>r</span>
                <span>e</span>
                <span>...</span>
              </span>
            </strong>
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="mb-5 p-5 bg-custom-info text-white">
  <h2 className="text-center">
    <strong>OUR STORY</strong>
  </h2>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  </p>
  <blockquote className="blockquote text-center">
    <p className="mb-0">“Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.”</p>
  </blockquote>
</section>


        {/* Why Choose Us Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4"><strong>WHY CHOOSE US</strong></h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card personalized-card text-center">
                <div className="card-body">
                 
                  <h4><b>Personalized Solutions</b></h4>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4333/4333405.png" // Personalized Solutions icon
                    alt="Personalized Solutions Icon"
                    className="img-fluid mb-2 icon-size" // Added icon-size class
                  />
                  <p>At Saheli, we go beyond standard offerings by customizing shoes, slippers, and sandals to perfectly match your style and comfort preferences.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card diverse-card text-center">
                <div className="card-body">
                
                  <h4><b>Diverse Collection</b></h4>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3050/3050651.png" // Diverse Collection icon
                    alt="Diverse Collection Icon"
                    className="img-fluid mb-2 icon-size" // Added icon-size class
                  />
                  <p>From trendy women’s clothing and handbags to stylish men’s footwear, our diverse range ensures that you find exactly what you’re looking for, all under one roof.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card quality-card text-center">
                <div className="card-body">
                 
                  <h4><b>Quality and Style</b></h4>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2921/2921236.png" // Quality and Style icon
                    alt="Quality and Style Icon"
                    className="img-fluid mb-2 icon-size" // Added icon-size class
                  />
                  <p>We are committed to providing high-quality products that combine elegance with durability, making sure you step out in confidence every time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
