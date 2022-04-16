import React from "react";
import Bottom from "../../components/Bottom";
import "../request-break/Requestbreak.css";

const Requestbreak = () => {
  return (
    <div className="Requestbreak">
      <h1>Request Break</h1>
      <div class="col-25">
        <label for="date">Today's Date</label>
      </div>
      <div className="date">
        <input type="text" name="date" id="date" />
      </div>
      <div class="col-26">
        <label for="time">Time Out</label>
      </div>
      <div className="time">
        <input type="text" name="time" id="time" />
      </div>
      <div className="textarea">
        <label for="request">Reason</label>
        <textarea id="request" name="request"></textarea>
      </div>
      <div className="but">
        <button id="but1">Approved</button>
        <button id="but2">Pending</button>
      </div>
      <div>
        <button id="but3">Request Break</button>
      </div>
      <Bottom />
    </div>
  );
};

export default Requestbreak;
