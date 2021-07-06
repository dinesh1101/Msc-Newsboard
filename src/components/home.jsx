import NavBar from "./navbar";
import { React, useState } from "react";
import "../home.css";
import {
  FcBusinessman,
  FcCalculator,
  FcDepartment,
  FcGraduationCap,
  FcHome,
} from "react-icons/fc";
import { FaMoneyCheck, FaPlus, FaPeopleCarry } from "react-icons/fa";
import ModalView from "./modal";
import Cards from "./cards";

const Home = ({ currentUser }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      logo: FcHome,
      name: "AU HOME",
      text: "Please add the news you come to know",
      url: "https://www.annauniv.edu/",
    },
    {
      id: 2,
      logo: FaMoneyCheck,
      name: "AUKDC FEE",
      text: "Any fee circular seen by you? Update here",
      url: "https://www.aukdc.edu.in/onlinefee/",
    },
    {
      id: 3,
      logo: FcBusinessman,
      name: "ACOE",
      text: "Any official circular has been forwarded? Update here",
      url: "https://acoe.annauniv.edu/",
    },
    {
      id: 4,
      logo: FcDepartment,
      name: "CEG HOSTEL",
      text: "Hostellers are requested to Submit your id card before vacating- all sem",
      url: "https://ceghostel.in/",
    },
    {
      id: 5,
      logo: FcGraduationCap,
      name: "SEMS STUDENTS",
      text: "Please check your Assessment Marks",
      url: "https://acoe.annauniv.edu/sems/login/student",
    },
    {
      id: 6,
      logo: FaPeopleCarry,
      name: "Junior<->Senior",
      text: "Hey juniors! Need volunteers for HR team - matrix //For   Contact-997465xxxx",
      url: "",
    },
    {
      id: 7,
      logo: FcCalculator,
      name: "CGPA CLACI",
      text: " A web application used to calculate GPA and CGPA  'Credits RITHICK B' ",
      url: "https://rithick0907.github.io/cgpa-calculator/",
    },
    {
      id: 8,
      logo: FaPlus,
      name: "~",
      text: "yet to be added  ",
      url: "https://www.annauniv.edu/",
    },
  ]);

  return (
    <>
      <NavBar currentUser={currentUser} />
      {currentUser ? (
        <>
          <ModalView
            sendDataToModal={(textdata, cardno) => {
              let temp = [...cards];
              temp[cardno - 1].text = textdata;
              setCards(temp);
            }}
          />
          <div className="elements">
            {cards.map((card) => (
              <Cards
                key={card.id}
                logo={card.logo}
                name={card.name}
                text={card.text}
                url={card.url}
              />
            ))}
            {/* <Cards
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
            /> */}
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
    </>
  );
};

export default Home;
