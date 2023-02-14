import React from "react";
import "./css/StudentDashboard.css";

function StudentCard(props) {
  return (
    <div className="card" style={{ backgroundColor: props.bg }}>
      <h1>{props.count}</h1>
      <h4>{props.desc}</h4>
    </div>
  );
}

export default StudentCard;
