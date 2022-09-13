import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBarStyle } from "../../styles/ProductScreen";
import { Button, Modal } from "react-bootstrap";
import Signup from "../../components/auth/signup/Signup";
import Signin from "../../components/auth/signin/Signin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <NavBarStyle>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <>
              {user ? (
                <>
                  <span className="text-white me-1">
                    {user.displayName || user.email}
                  </span>
                  <button
                    variant="outline-danger"
                    onClick={() => auth.signOut()}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="#" className="Link" onClick={handleShowLogin}>
                  Login
                </Link>
              )}
            </>
          </li>
          <li>
            <Link to="#" className="Link" onClick={handleShow}>
              Register
            </Link>
          </li>
        </ul>
      </NavBarStyle>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signin />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Navbar;
