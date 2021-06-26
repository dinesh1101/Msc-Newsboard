import React from "react";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <ul className="navbar-nav navbar-center">
        <li className="nav-item">
          {currentUser ? (
            <h6>
              Welcome <b>{currentUser.name}</b>
            </h6>
          ) : (
            <h5>SignIn to continue</h5>
          )}
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Link 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Link 2
          </a>
        </li>
        <li className="nav-item navbar-brand">
          {currentUser ? (
            <div>
              <button
                className="btn btn-danger ml-3"
                onClick={() => auth.signOut()}
                style={{ cursor: "pointer" }}
              >
                SignOut
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-success ml-3">SignIn</button>
              </Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
