import React from "react";
import "./FirstPage.css";
// import { FcGoogle } from "react-icons/fc";
import logo from "../";

const FirstPage = () => {
  return (
    <div className="first">
      <div>
        <div className="f-first">
          <p className="f-para">lets get started</p>
          {/* <img src=""></img> */}
          {/* <FcGoogle /> */}
          {/* <button className="">signin</button> */}
          <button type="button" class="login-with-google-btn">
            Sign in with Google
          </button>
        </div>
      </div>
      <div className="f-second">
        <div className="logo">
          {/* <FcGoogle /> */}
          <p className="f-second-para">irame</p>
        </div>
        <div className="content">
          <div className="second-content">ai that excels</div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
