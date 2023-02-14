import React from "react";

function TeacherDetail(props) {
  return (
    <div className="detailBox">
      <div className="department">{props.dept}</div>
      <div className="userName">{props.name}</div>
      <div className="metamaskId">{props.id}</div>
    </div>
  );
}

export default TeacherDetail;
