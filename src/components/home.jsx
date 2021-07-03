import NavBar from "./navbar";
import { React, useState, useEffect } from "react";
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
import ModalView from "./modal";
import Cards from "./cards";

const Home = ({ currentUser }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <>
      <NavBar currentUser={currentUser} />
      {currentUser ? (
        <>
          {" "}
          <ModalView
            sendDataToModal={(e, cardno) => {
              console.log(cardno, e);
              let temp = [...data];

              temp[cardno - 1] = e;

              console.log(data);
              setData(temp);
            }}
          />
          <div className="elements">
            <Cards
              logo={FcHome}
              name="AU HOME"
              text={data[0]}
              url="https://www.annauniv.edu/"
            />
            <Cards
              logo={FaMoneyCheck}
              name="AUKDC FEE"
              text={data[1] && <div>{data[1]}</div>}
              url="https://www.aukdc.edu.in/onlinefee"
            />
            <Cards
              logo={FcBusinessman}
              name="ACOE"
              text={data[2] && <div>{data[2]}</div>}
              url="https://acoe.annauniv.edu/"
            />
            <Cards
              logo={FcDepartment}
              name="CEG HOSTEL"
              text={data[3] && <div>{data[3]}</div>}
              url="https://ceghostel.in/"
            />
            <Cards
              logo={FcGraduationCap}
              name="SEMS STUDENTS"
              text={data[4] && <div>{data[4]}</div>}
              url="https://acoe.annauniv.edu/sems/login/student"
            />
            <Cards
              logo={FcReading}
              name="SYLLABUS IT/CS"
              text={data[5] && <div>{data[5]}</div>}
              url=""
            />
            <Cards
              logo={FcCalculator}
              name="CGPA CALC"
              text={data[6] && <div>{data[6]}</div>}
              url="https://rithick0907.github.io/cgpa-calculator/"
            />
            <Cards
              logo={FaPlus}
              name="~"
              text={data[7] && <div>{data[7]}</div>}
              url="https://duckduckgo.com/"
            />
          </div>
        </>
      ) : (
        <div className="elements vh-100">
          <div className="dash-text">
            ___N A M M A___M.Sc___D A S H B O A R D___
          </div>
          <pre
            style={{
              margin: "6rem 0 0 38rem",
            }}
          >
            -Dinesh
          </pre>
        </div>
      )}
      {/* */}
    </>
  );
};

export default Home;
