import React from "react";
import { Route } from "react-router-dom";
import LoginError from "./components/Error/LoginError";
import SignupError from "./components/Error/SignupError";
import InitialPage from "./components/Home";
import LoginForm from "./components/User/LoginForm";
import SignupForm from "./components/User/SignupForm";

function App() {
  return (
    <div>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/signup" component={SignupForm} />
      <Route exact path="/home" component={InitialPage} />
      <Route exact path="/loginerror" component={LoginError} />
      <Route exact path="/signuperror" component={SignupError} />
    </div>
  );
}

export default App;
