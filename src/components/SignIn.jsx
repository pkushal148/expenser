import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth, provider } from "../config/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userInfo = {
        name: result.user.displayName,
        email: result.user.email,
        userId: result.user.uid,
        photo: result.user.photoURL,
        loggedIn: true,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate("/user");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="d-flex signIn align-items-center justify-content-around vh-100">
        <div className="heading">
          <h1 className="m-4">Expenser</h1>
          <h4>Track your expenses before it gets out of hand !!</h4>
        </div>
        <div className="login d-flex flex-column">
          <p>Sign in With</p>
          <button className="login-btn" onClick={handleSignIn}>
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
