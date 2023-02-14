import React from "react";
import "./css/StudentDashboard.css";
import StudentCard from "./StudentCard";
import RecordCard from "./RecordCard";
import Navbar from "./Navbar";

function StudentDashboard() {
  return (
    <div className="container">
      <Navbar />
      <div className="left_panel">Profile</div>
      <div className="dummyLeft"></div>
      <div className="right_panel">
        <div className="cardContainer">
          <StudentCard count="9.6" desc="CGPA" bg="#17A2B8" />
          <StudentCard count="25" desc="Cleared Subjects" bg="#28A745" />
          <StudentCard count="2" desc="Backlog Subjects" bg="#E40016" />
        </div>
        <h1 className="section_heading">RESULTS</h1>
        <RecordCard name="Semester 1" desc="CGPA: 7.78" />
        <RecordCard name="Semester 2" desc="CGPA: 9.96" />
        <RecordCard name="Semester 3" desc="CGPA: 10.0" />
        <RecordCard name="Semester 4" desc="CGPA: 10.0" />
        {/* <RecordCard name="Semester 5" desc="CGPA: 9.83" />
        <RecordCard name="Semester 6" desc="CGPA: 8.57" /> */}
        <h1 className="section_heading">PROJECTS</h1>
        <RecordCard name="Course Finder" desc="Tech Used: HTML, CSS, JS" />
        <RecordCard
          name="Calorie Caretaker"
          desc="Tech Used: HTML, CSS, JS, NodeJs"
        />
        <h1 className="section_heading">INTERNSHIPS</h1>
        <RecordCard
          name="Web Deverlopment Intern"
          desc="The Sparks Foundation"
        />
        <RecordCard name="Web Design Intern" desc="Ace Overseas" />
      </div>
    </div>
  );
}

export default StudentDashboard;
