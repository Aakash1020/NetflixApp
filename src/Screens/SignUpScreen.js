import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignUpScreen() {
  const refemail = useRef(null);
  const refpassword = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        refemail.current.value,
        refpassword.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        refemail.current.value,
        refpassword.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <div className="section__signin">
          <input ref={refemail} placeholder="Email" type="email" />
          <input ref={refpassword} placeholder="Password" type="password" />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
          <h4>
            <span className="color_gray">New to Netflix ?</span>{" "}
            <span className="signup__link" onClick={register}>
              Sign Up now
            </span>
          </h4>
        </div>
      </form>
    </div>
  );
}

export default SignUpScreen;
