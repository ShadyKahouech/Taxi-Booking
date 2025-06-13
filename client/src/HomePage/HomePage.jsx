import React from "react";
import "./HomePage.css";
import taxiImg from "../images/imageTs.png";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

function HomePage() {
  return (
    <div className="homepage__container__global">
      <div className="homepage__container">
        <div className="homepage__container-container">
          <Header />
          <div className="homepage__container-body">
            <h1 className="homepage__container-title">
              Your Journey, Your control
            </h1>
            <div className="homepage__container-buttonContainer">
              <button className="homepage__container-button__primary">
                Apply to drive
              </button>
              <button className="homepage__container-button__secondary">
                Sign up to ride
              </button>
            </div>
            <img className="homepage__container-img" src={taxiImg} alt="" />
          </div>
        </div>
      </div>
      <div className="homepage__container-sidebar">
        <SideBar />
      </div>
    </div>
  );
}

export default HomePage;
