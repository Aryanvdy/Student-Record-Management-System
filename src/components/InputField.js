import React from "react";
import "./css/InputField.css";

function InputField(props) {
   return (
    <div className="input-field">
      <label htmlFor="">{props.name}</label>
      <br />
      <input
        type={props.type}
        name={props.name}
        id=""
        className={props.class}
      />
    </div>
  );
}

export default InputField;
