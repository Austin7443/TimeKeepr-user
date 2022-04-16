import React from "react";
import { FaHandPointUp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Bottom from "../../components/Bottom";
import "../home/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Hi NEOMERIC,</h1>
      <span id="am">9:00</span>
      <p>Wednesday, 30th March</p>
      <Link to="/success">
        <div id="circle">
          <FaHandPointUp
            style={{ color: "white", height: "150px", width: "65px" }}
          />
        </div>
      </Link>
      <span id="in">Clock in</span>
      <div id="notclose">
        <MdLocationOn
          style={{
            color: "rgb(111, 185, 250)",
            height: "45px",
            width: "40px",
            marginTop: "15px",
          }}
        />
        <p>
          You are not in <br></br>office reach!
        </p>
      </div>
      <Bottom />
    </div>
  );
};

export default Home;
