import React from "react";
import { Link } from "react-router-dom";

function CountCard(props) {
  return (
    <div className="countCard">
      <Link to={props.link} className="link">
        <div className="cardContent">
          <div className="count"> {props.count} </div>
          <div className="countName">{props.countName}</div>
        </div>
      </Link>
    </div>
  );
}

export default CountCard;
