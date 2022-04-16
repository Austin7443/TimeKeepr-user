import React from "react";
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { RiGitPullRequestLine } from "react-icons/ri";
import { MdNotificationsNone } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import "../components/Bottom.css";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <IconContext.Provider
      value={{ color: "grey", size: "2.7em", margin: "30px" }}
      id="footer-icons"
    >
      <footer>
        <Link to="/home">
          <div className="teshome">
            <span>Home</span>
            <AiFillHome id="footer-icons1" />
          </div>
        </Link>
        <Link to="/requestbreak">
          <div className="teshome">
            <span>Request</span>
            <RiGitPullRequestLine id="footer-icons2" />
          </div>
        </Link>
        <Link to="/nonotification">
          <div className="teshome">
            <span>Notifications</span>
            <MdNotificationsNone id="footer-icons3" />
          </div>
        </Link>
        <Link to="/history">
          <div className="teshome">
            <span>History</span>
            <FaHistory id="footer-icons4" />
          </div>
        </Link>
      </footer>
    </IconContext.Provider>
  );
};

export default Bottom;
