import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
// import { toast } from "@chakra-ui/react";
import { Form, Button } from "react-bootstrap";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [checked, setChecked] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    let auth = getAuth();
    try {
      if (checked === false) {
        setErrorMsg("You must check");
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
        return;
      }
      if (password.length < 6) {
        setErrorMsg("password cant be under 6 characters");
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
        return;
      }
      if (password !== repassword) {
        setErrorMsg("passwords not match");
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser, { displayName: fullname })
            .then(() => {
              setSuccessMsg("Signup Succesfull.");
              setFullname("");
              setEmail("");
              setPassword("");
              setRePassword("");
              setAdress("");
              setPhone("");
              setErrorMsg("");
              setTimeout(() => {
                setSuccessMsg("");
              }, 3000);
            })
            .catch((error) => {
              if (password !== repassword) {
                setErrorMsg("not equal");
              }
              setErrorMsg("This mail has been using");
              setTimeout(() => {
                setErrorMsg("");
              }, 3000);
            });
        })
        .catch((e) => {
          if (password !== repassword) {
            setErrorMsg("not equal");
          }

          setErrorMsg("This mail has been using");
          setTimeout(() => {
            setErrorMsg("");
          }, 3000);
        });
    } catch (error) {
      //   toast(error.code, { type: "error" });
      setErrorMsg("This mail has been using");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }
  };

  return (
    <>
      {successMsg && (
        <>
          <div className="success-msg bg-success text-white">{successMsg}</div>
        </>
      )}
      <br />
      <br />

      <Form onSubmit={registerUser}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Name *"
            required
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
          ></Form.Control>
        </Form.Group>
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

        <Form.Group>
          <Form.Control
            type="password"
            placeholder="re-password *"
            required
            onChange={(e) => setRePassword(e.target.value)}
            value={repassword}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Adress "
            rows={3}
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Phone *"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onClick={() => setChecked(true)}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Add New User
        </Button>
      </Form>
      <br />
      {errorMsg && (
        <>
          <div className="error-msg bg-danger text-white">{errorMsg}</div>
        </>
      )}
      <br></br>
    </>
  );
};

export default Signup;
