import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.modules.css";

function Home() {
  const [mail, setMail] = useState("");

  return (
    <div className="container">
      {/* Start-Hero Background and Header */}
      <section className="hero">
        <h4 className="smaller">Trade-in-offer</h4>
        <h2 className="normal">Super value deals</h2>
        <h1 className="big">On all products</h1>
        <p className="p">Save more with coupons & up to 70% offf!</p>
        <button className="btn btn-success shop">
          <Link className="text-decoration-none" to="/products">
            Shop Now
          </Link>
        </button>
      </section>
      {/* End-Hero Background and Header */}

      {/* Start-Features */}

      <section className="feature section-p1 ">
        <div className="fe-box">
          <img src={require("./img/features/f1.png")} alt="fe-ship" />
          <h6 className="small">Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f2.png")} alt="fe-ship" />
          <h6 className="small">Online Order</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f3.png")} alt="fe-ship" />
          <h6 className="small">Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f4.png")} alt="fe-ship" />
          <h6 className="small">Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f5.png")} alt="fe-ship" />
          <h6 className="small">Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f6.png")} alt="fe-ship" />
          <h6 className="small">24/7 Support</h6>
        </div>
      </section>
      {/* End-Features */}

      {/* Start-Newsletter */}

      <section className="newsletter section-p1 section-m1">
        <div className="newstext">
          <h4 className="smaller">Sign Up For Newsletters</h4>
          <p className="p">
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input
            type="mail"
            placeholder="Your email address"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <button
            className="btn btn-success"
            onClick={() => {
              alert("Thanks for subscribe");
              setMail("");
            }}
          >
            Subscribe
          </button>
        </div>
      </section>
      {/* End-Newsletter */}

      {/* Start-Footer */}

      <footer className="section-p1">
        <div className="col">
          <img src={require("./img/logo.png")} alt="logo" className="logo" />
          <h4 className="smaller">Contact</h4>
          <p className="p">
            <strong>Address: </strong> Street 4, Istanbul,Sisli
          </p>
          <p className="p">
            <strong>Phone: </strong> +905058763918
          </p>
          <p className="p">
            <strong>Hours: </strong> 09:00-19:00, Monday - Saturday
          </p>
          <div className="follow">
            <h4 className="smaller">Follow Us</h4>
            <div className="icon">
              <Link to="/" className="a">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="/" className="a">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/" className="a">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link to="/" className="a">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <h4 className="smaller">About</h4>
          <Link to="/about">About us</Link>
          <Link to="/about">Privacy Policy</Link>
          <Link to="/about">Terms & conditions</Link>
          <Link to="/contact">Contact us</Link>
        </div>

        <div className="col pay">
          <p className="p">Secured Payment Gateways</p>
          <img src={require("./img/pay/pay.png")} alt="pay" />
        </div>
        <div className="copyright">
          <p className="p">© 2022, React Ecommerce.</p>
        </div>
      </footer>

      {/* End-Footer */}
    </div>
  );
}

export default Home;
