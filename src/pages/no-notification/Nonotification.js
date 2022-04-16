import React from "react";
import Bottom from "../../components/Bottom";
import "../no-notification/Nonotification.css";
import nonotificationpix from "../no-notification/nonotification.jpg";

const Nonotification = () => {
  return (
    <div className="nonotification">
      <p id="none">No Notifications Yet!</p>
      <img src={nonotificationpix} alt="nonotification" />
      <p id="para">"We'll notify you when something arrive!"</p>
      <Bottom />
    </div>
  );
};

export default Nonotification;
