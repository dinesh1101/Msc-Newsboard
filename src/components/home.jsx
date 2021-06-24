import React from "react";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

const Home = ({ currentUser }) => {
  return (
    <div className="d-flex justify-content-end mt-3 mr-5">
      {currentUser ? (
        <div onClick={() => auth.signOut()} style={{ cursor: "pointer" }}>
          SignOut
        </div>
      ) : (
        <Link to="/login">SignIn</Link>
      )}
      <p>/</p>
      <Link to="/">Register</Link>
    </div>
  );
};

export default Home;
