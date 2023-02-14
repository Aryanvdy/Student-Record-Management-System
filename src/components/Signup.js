import React from "react";
import "./../components/css/Signup.css";
import LoginwithMetamask from "./LoginwithMetamask";

function Signup() {
  return (
    <div className="container">
      {/* <form action="" method="" className="signup_form"> */}
      <div className="signup_form">
        <h2>Sign Up</h2>
        <LoginwithMetamask />
        <br />
        <br />
        <input
          className="input_field"
          type="text"
          placeholder="User ID"
          name="userid"
        />{" "}
        <br />
        <br />
        <select className="input_field" name="designation" id="select">
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
          <option value="Faculty">Company</option>
        </select>
        <br />
        <br />
        <button type="submit">Create User</button>
      </div>
      {/* </form> */}
    </div>
  );
}

export default Signup;
