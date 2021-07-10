import NavBar from "./navbar";
import firebase from "./firebase";
import { React, useState, useEffect, useCallback } from "react";
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
  const [news, setNews] = useState([]);

  const [cards, setCards] = useState([
    {
      id: 1,
      logo: FcHome,
      name: "AU HOME",
      text: "",
      url: "https://www.annauniv.edu/",
    },
    {
      id: 2,
      logo: FaMoneyCheck,
      name: "AUKDC FEE",
      text: "",
      url: "https://www.aukdc.edu.in/onlinefee/",
    },
    {
      id: 3,
      logo: FcBusinessman,
      name: "ACOE",
      text: "",
      url: "https://acoe.annauniv.edu/",
    },
    {
      id: 4,
      logo: FcDepartment,
      name: "CEG HOSTEL",
      text: "",
      url: "https://ceghostel.in/",
    },
    {
      id: 5,
      logo: FcGraduationCap,
      name: "SEMS STUDENTS",
      text: "",
      url: "https://acoe.annauniv.edu/sems/login/student",
    },
    {
      id: 6,
      logo: FaPeopleCarry,
      name: "Junior<->Senior",
      text: "",
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

  const populateCard = useCallback((newsObj) => {
    const temp = [...cards];
    for (const index in newsObj) {
      const tempNews = { ...cards[index] };
      tempNews.text = newsObj[index].News;
      temp[index] = tempNews;
    }
    setCards(temp);
  }, []);

  useEffect(() => {
    const store = firebase.database().ref("/CardNews");
    store.on("value", (response) => {
      const data = response.val();
      let temp = [];
      for (let id in data) {
        temp.push({
          id: id,
          News: data[id].News,
          Cardid: data[id].Cardid,
        });
      }
      setNews(temp);
      populateCard(temp);
    });
  }, [populateCard]);

  useEffect(() => {
    populateCard(news);
  }, [news, populateCard]);

  return (
    <>
      <NavBar currentUser={currentUser} />

      {currentUser ? (
        <div className="elements ">
          <ModalView
            sendDataToModal={(cardno) => {
              let temp = [...cards];
              temp[cardno - 1].text = news[cardno - 1].News;

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
          </div>
        </div>
      ) : (
        <div>
          <div className="dash-text">M.Sc &nbsp; D A S H B O A R D</div>
        </div>
      )}
    </>
  );
};

export default Home;
