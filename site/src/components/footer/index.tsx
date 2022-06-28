import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="site-footer-container">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 style={{ fontWeight: "800" }}>
                <img src="/app-logo.png" className="w-[100px]"/>
                <span className="ms-2" style={{ color: "black " }}>Finner</span>
                -Shop
              </h6>

              <div className="social-icon">
                <a href="#"><i className='bx bxl-facebook' ></i></a>
                <a href="#"><i className='bx bxl-twitter' ></i></a>
                <a href="#"><i className='bx bxl-telegram' ></i></a>
                <a href="#"><i className='bx bxl-instagram' ></i></a>
                <a href="#"><i className='bx bxl-youtube' ></i></a>
              </div>

            </div>

            <div className="shopping col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-4">
                Shopping online
              </h6>
              <p>
                <a href="#">Order Status</a>
              </p>
              <p>
                <a href="#">Shipping and Delivery</a>
              </p>
              <p>
                <a href="#">Returns</a>
              </p>
              <p>
                <a href="#">Payment options</a>
              </p>
              <p>
                <a href="#">Contact Us</a>
              </p>
            </div>

            <div className="info col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-4">
                Information
              </h6>
              <p>
                <a href="#">Gift Cards</a>
              </p>
              <p>
                <a href="#">Find a store</a>
              </p>
              <p>
                <a href="#">Newsletter</a>
              </p>
              <p>
                <a href="#">Bacome a member</a>
              </p>
              <p>
                <a href="#">Site feedback</a>
              </p>
            </div>

            <div className="contact col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-4">
                Contact
              </h6>
              <p>
                <a href="#">store@vnuk.edu.vn</a>
              </p>
              <p>
                <a href="#">Hotline: +84 131 138 138</a>
              </p>
            </div>
          </div>
          <hr />
          <div className="copyright text-center mt-[20px]">
            <h4 style={{ opacity: "0.6" }}>Finner Shop - © 2022</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 