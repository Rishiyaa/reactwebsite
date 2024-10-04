import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-100 text-center p-4">
        <div className="container">
          <div className="row">
            {/* Company Details */}
            <div className="col-md-4">
              <h5><strong>Location</strong></h5>
              <p>ABC Solutions</p>
              <p>1234 Main Street, Suite 100</p>
              <p>Colombo, Sri Lanka</p>
            </div>

            {/* Contact Details */}
            <div className="col-md-4">
              <h5><strong>Contact Us</strong></h5>
              <p>Email: info@abc.com</p>
              <p>Phone: +94 123 456 789</p>
              <p>Support: support@abc.com</p>
            </div>

            {/* Social Media Links with Icons */}
            <div className="col-md-4">
              <h5><strong>Follow Us</strong></h5>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Terms and Copyright */}
          <div className="row mt-4">
            <div className="col-12">
              <p>
                © {new Date().getFullYear()} ABC Solutions. All Rights
                Reserved | <a href="/terms">Terms and Conditions</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
