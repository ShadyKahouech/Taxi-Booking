import React from "react";
import taxi from "../images/taxi.png";
import "./Header.css";
function Header() {
  return (
    <div className="homepage__container-header">
      <img className="homepage__container-logo" src={taxi} alt="" />
      <button className="homepage__container-button__primary">
        <span className="homepage__container-button__primary-title">
          Ride with call
        </span>
      </button>
    </div>
  );
}

export default Header;
