import React from "react";

import SignIn from "../../components/sign-in/sign-in.com";
import SignUp from "../../components/sign-up/sign-up.com";

import "./sign-in-and-sign-up.style.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
