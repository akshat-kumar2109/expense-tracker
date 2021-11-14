import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "./LoginForm.css";
import Button from "../UI/Button";

function LoginForm() {
  let history = useHistory();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const signupHandler = (event) => {
    history.push("/signup");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const user = {
      email: enteredEmail,
      password: enteredPassword,
    };

    axios
      .post("https://akshat-expense-tracker.herokuapp.com/users/login", user)
      .then(() => {
        history.push("/home");
      })
      .catch((error) => {
        history.push("/loginerror");
      });
  };

  return (
    <div className="input">
      <Button onClick={signupHandler}>Signup</Button>
      {/* <button onClick={signupHandler}>Signup</button> */}
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">Email</label>
        <input type="email" onChange={emailChangeHandler} />
        <label htmlFor="">Password</label>
        <input type="password" onChange={passwordChangeHandler} />
        <Button type="submit">Login</Button>
        {/* <button type="submit">Login</button> */}
      </form>
    </div>
  );
}

export default LoginForm;
