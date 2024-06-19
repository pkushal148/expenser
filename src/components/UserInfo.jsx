import React from "react";
import { auth } from "../config/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GetUserInfo from "./GetUserInfo";

const UserInfo = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { userInfo } = GetUserInfo();

  return (
    <>
      <div className="userInfo d-flex align-items-center justify-content-between">
        <div className="name">{userInfo.name}'s Expenses</div>
        <div className="photo">
          <img
            src={userInfo.photo}
            alt=""
            className="rounded-circle mx-4"
            height={75}
            width={75}
          />
          <button className="signOut mx-2" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
