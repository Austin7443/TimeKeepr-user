import React from "react";
import Bottom from "../../components/Bottom";
import "../history/History.css";

const History = () => {
  return (
    <div className="history">
      <h1>History</h1>
      <table>
        <tr>
          <th>Daily</th>
          <th>Weekly</th>
          <th>Monthly</th>
        </tr>
        <tr>
          <td>Days</td>
          <td></td>
          <td>Time</td>
        </tr>
        <tr id>
          <td>Monday</td>
          <td></td>
          <td>9:00</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td></td>
          <td>9:20</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td></td>
          <td>.......</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td></td>
          <td>8:57</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td></td>
          <td>9:00</td>
        </tr>
      </table>
      <div>
        <button id="cancelbutton">Cancel</button>
      </div>
      <Bottom />
    </div>
  );
};

export default History;
