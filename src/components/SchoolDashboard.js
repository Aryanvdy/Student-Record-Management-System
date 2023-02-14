import React from "react";
import CountCard from "./CountCard";
import "./css/SchoolDashboard.css";
// import TeacherList from "./TeacherList";

function SchoolDashboard() {
  const name = "THADOMAL SHAHANI ENGINNERING COLLEGE";

  return (
    <div className="dashboardContainer">
      <h1>School/College Dashboard </h1>
      <h2>{name}</h2>
      <div className="cardContainer">
        <CountCard count="31" countName="Teachers" link="/teacherlist" />
        <CountCard count="480" countName="Students" link="/studentlist" />
      </div>
      <br />
      <br />
      <h2>Recent Actions </h2>
    </div>
  );
}

export default SchoolDashboard;
