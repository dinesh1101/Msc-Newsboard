//import NavBar from "./navbar";
import React from "react";
import "../home.css";
import {
  FcBusinessman,
  FcCalculator,
  FcReading,
  FcDepartment,
  FcGraduationCap,
  FcHome,
} from "react-icons/fc";
import { FaMoneyCheck, FaPlus } from "react-icons/fa";

import Cards from "./cards";

const Home = ({ currentUser }) => {
  // return <NavBar currentUser={currentUser} />;
  return (
    <div className="elements">
      <Cards
        logo={FcHome}
        name="AU HOME"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            non"
        url="https://www.annauniv.edu/"
      />
      <Cards
        logo={FaMoneyCheck}
        name="AUKDC FEE"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            non"
        url="https://www.aukdc.edu.in/onlinefee"
      />
      <Cards
        logo={FcBusinessman}
        name="ACOE"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            non"
        url="https://acoe.annauniv.edu/"
      />
      <Cards
        logo={FcDepartment}
        name="CEG HOSTEL"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            non"
        url="https://ceghostel.in/"
      />
      <Cards
        logo={FcGraduationCap}
        name="SEMS STUDENTS"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            non"
        url="https://acoe.annauniv.edu/sems/login/student"
      />
      <Cards
        logo={FcReading}
        name="SYLLABUS IT/CS"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            non"
        url=""
      />
      <Cards
        logo={FcCalculator}
        name="CGPA CALC"
        text="Simplified calculator to know your CGPA/GPA for your academic purpose (credits-Rithick)"
        url="https://rithick0907.github.io/cgpa-calculator/"
      />
      <Cards
        logo={FaPlus}
        name="~"
        text="To be added"
        url="https://duckduckgo.com/"
      />
    </div>
  );
};

export default Home;
