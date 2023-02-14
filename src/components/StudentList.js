import React from 'react'
import TeacherDetail from "./TeacherDetail";
import "./css/UserList.css";

function StudentList() {
  return (
    <div className="listContainer">
      <h2>Student List</h2>
      <div className="teacherList">
        <TeacherDetail
          name="Student"
          id="0x2619BB316ebEb3c6da88fd160472B79F5B081bBD"
          dept="Computer"
        />
      </div>
    </div>
  )
}

export default StudentList