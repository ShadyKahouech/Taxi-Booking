import React from "react";
import "./SideBar.css";
import { IoHomeOutline } from "react-icons/io5";

import { IoCarSportOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="homepage__container-sidebar">
      <div className="homepage__container-sidebar__icon">
        <IoHomeOutline />
        <IoCarSportOutline />
        <FaClockRotateLeft />
        <FaRegUser onClick={handleLogin} />
      </div>
    </div>
  );
}

export default SideBar;
