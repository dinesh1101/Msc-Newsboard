//import NavBar from "./navbar";
import React from "react";
import "../home.css";
import { FcGoogle } from "react-icons/fc";

const Home = ({ currentUser }) => {
  // return <NavBar currentUser={currentUser} />;
  return (
    <div className="elements">
      <div className="card text-center ">
        <div className="card-body">
          <p className="card-title">
            {" "}
            <FcGoogle size="5rem " />
            <br />
            <span>Home</span>
          </p>
          <div className="card-text inner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            non!
          </div>
        </div>
        <div className="card-footer bg-primary " type="submit">
          Follow Link
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="card-title">2</h4>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="card-title">3</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">4</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">5</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">6</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">7</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">8</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
