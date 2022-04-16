import React from "react";
import "../clock-in/Clockin.css";
import clockin from "../clock-in/clockin.png";
import Bottom from "../../components/Bottom";

const Clockin = () => {
  return (
    <div className="clockin">
      <p>
        You have Successfully <br></br>Clocked-In.
      </p>
      <img src={clockin} alt="clockinpix" height="150px" />
      <img src={clockin} alt="clockinpix" height="150px" />
      <Bottom />
    </div>
  );
};

export default Clockin;
