import React from "react";
import clockpix from "../sign-in/component/cvilla-logo2 (2).jpg";
import "../sign-in/component/Signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="signin">
      <img src={clockpix} alt="clock" />

      <div class="id">
        <label for="id" id="lab">
          ID
        </label>
      </div>
      <div className="id">
        <input type="text" name="id" id="id" />
      </div>
      <div class="password">
        <label for="password" id="lab">
          Password
        </label>
      </div>
      <div className="password">
        <input type="text" name="password" id="password" />
      </div>
      <Link to="/home">
        <button>Sign In</button>
      </Link>
    </div>
  );
};

export default Signin;
