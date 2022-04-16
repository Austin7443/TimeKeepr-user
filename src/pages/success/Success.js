import React from "react";
import Bottom from "../../components/Bottom";
import sucessicon from "../success/component/cvilla-logo2.jpg";
import "../success/Success.css";

const Success = () => {
  return (
    <div className="success">
      <img src={sucessicon} alt="sucess icon" />
      <h1>Success!</h1>
      <p>You have Clocked in.</p>
      <Bottom />
    </div>
  );
};

export default Success;
