import React from "react";
import TeacherDetail from "./TeacherDetail";
import "./css/UserList.css";

function TeacherList() {
  return (
    <div className="listContainer">
      <div className="addTeacher">
        <h2>Add New Teacher</h2>
        <div>
          <label htmlFor="metamaskid">Metamask ID</label>
          <br />
          <input className="addUserInput" type="text" name="metamaskid" />
        </div>
        <div>
          <label htmlFor="metamaskid">Department</label>
          <br />
          <input className="addUserInput" type="text" name="dept" />
        </div>
        <button className="addButton">Add</button>
      </div>
      <h2>Teacher List</h2>
      <div className="teacherList">
        <TeacherDetail
          name="Teacher 1"
          id="0x2619BB316ebEb3c6da88fd160472B79F5B081bBD"
          dept="Computer Science"
        />

        <TeacherDetail
          name="Teacher 2"
          id="0x50Fe683Cefc126d17f69d1e604AA910fF4a1c0c0"
          dept="Information Technology"
        />
      </div>
    </div>
  );
}

export default TeacherList;
