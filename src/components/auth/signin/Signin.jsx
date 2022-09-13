import React, { useState } from "react";
import { auth } from "../../../firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Form, Button } from "react-bootstrap";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [checked, setChecked] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (checked === false) {
        setErrorMsg("You must check");
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
        return;
      }
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setEmail("");
          setPassword("");
          setSuccessMsg("Signin success");
          setTimeout(() => {
            setSuccessMsg("");
          }, 3000);
        })
        .catch((e) => {
          if (email === "") {
            setErrorMsg("e-mail cannot be passed empty");
            setTimeout(() => {
              setErrorMsg("");
            }, 3000);
          } else if (password === "") {
            setErrorMsg("password cannot be passed empty");
            setTimeout(() => {
              setErrorMsg("");
            }, 3000);
          } else {
            setErrorMsg("Wrong password or email");
            setTimeout(() => {
              setErrorMsg("");
            }, 3000);
          }
        });
    } catch (error) {
      setErrorMsg("ses");
    }
  };
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        setSuccessMsg("Google-Signin success");
        setTimeout(() => {
          setSuccessMsg("");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleLogin}>
      {successMsg && <div className="bg-success text-white">{successMsg}</div>}
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="password"
          placeholder="password *"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Check me out"
          onClick={(e) => setChecked(true)}
        />
      </Form.Group>

      <Button variant="success" type="submit" onClick={handleLogin}>
        Login
      </Button>

      <Button className="ms-2" variant="primary" onClick={signInWithGoogle}>
        Login With Google
      </Button>

      {errorMsg && <div className="bg-danger text-white">{errorMsg}</div>}
    </Form>
  );
};

export default Signin;
