import React from "react";
import "./css/StudentDashboard.css";

function RecordCard(props) {
  return (
    <div className="recordCard">
      <button className="view_btn">View File</button>
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default RecordCard;
