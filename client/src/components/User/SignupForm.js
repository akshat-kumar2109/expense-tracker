import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Button from "../UI/Button";

function SignupForm() {
  let history = useHistory();
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };

    axios
      .post("https://akshat-expense-tracker.herokuapp.com/users", newUser)
      .then(() => {
        history.push("/home");
      })
      .catch((error) => {
        history.push("/signuperror");
      });
  };

  return (
    <div className="input">
      <form onSubmit={submitHandler}>
        <label htmlFor="">Name</label>
        <input type="text" onChange={nameChangeHandler} />
        <label htmlFor="">Email</label>
        <input type="email" onChange={emailChangeHandler} />
        <label htmlFor="">Password</label>
        <input type="password" onChange={passwordChangeHandler} />
        <Button>Signup</Button>
      </form>
    </div>
  );
}

export default SignupForm;
