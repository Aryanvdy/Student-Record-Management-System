import React from "react";
import InputField from "./InputField";
import "./css/StudentRegister.css";

function StudentRegister() {
  return (
    <>
      <form action="" method="post" className="StudentRefisterForm">
        <div className="register_input">
          <InputField name="First Name" type="text" class="three"></InputField>
          <InputField name="Middle Name" type="text" class="three"></InputField>
          <InputField name="Last Name" type="text" class="three"></InputField>
        </div>
        <div className="register_input">
          <InputField name="Department" type="text" class="two"></InputField>
          <InputField name="Roll No." type="number" class="two"></InputField>
        </div>
        <div className="register_input">
          <div className="col">
            <label htmlFor="">Gender</label>
            <div className="radioRow">
              <input type="radio" name="Gender" value="Male" id="" />
              <label htmlFor="" className="radioLabel">
                Male
              </label>
              <input type="radio" name="Gender" value="Female" id="" />
              <label htmlFor="" className="radioLabel">
                Female
              </label>
              <input type="radio" name="Gender" value="Other" id="" />
              <label htmlFor="" className="radioLabel">
                Other
              </label>
            </div>
          </div>

          <InputField name="Date of Birth" type="date" class="two"></InputField>
        </div>
        <div className="register_input">
          <InputField name="Address" type="textarea" class="one"></InputField>
        </div>
        <div className="register_input">
          <InputField name="City" type="text" class="two"></InputField>
          <InputField name="Pin Code" type="number" class="two"></InputField>
        </div>

        <div className="register_input">
          <InputField name="Email Address" type="text" class="two"></InputField>
          <InputField name="Phone No." type="number" class="two"></InputField>
        </div>
      </form>
    </>
  );
}

export default StudentRegister;
