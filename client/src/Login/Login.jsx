import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./Login.css";
import Cust from "../images/cust.png";

function Login() {
  return (
    <div className="login__container__global">
      <div className="login__container">
        <Header className="login__headercomponent" />
        <div className="login__container__body">
          <div className="login__container__img-global">
            <img className="login__container__img" src={Cust} alt="" />
            <div className="login__container__input">
              <h1>Travel With Trust and Ease</h1>
              <div className="login__container__input-1-2">
                <input
                  className="login__container__inputdesign-1"
                  type="text"
                />
                <input
                  className="login__container__inputdesign-1"
                  type="text"
                />
              </div>

              <input className="login__container__inputdesign" type="text" />
              <input className="login__container__inputdesign" type="text" />
            </div>
          </div>
        </div>
        <div className="">
          <button>Become a Driver ?</button>
          <button>Sign Up to Ride</button>
        </div>
      </div>
      <div className="homepage__container-sidebar">
        <SideBar />
      </div>
    </div>
  );
}

export default Login;
