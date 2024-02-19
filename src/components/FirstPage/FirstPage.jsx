import React from "react";
import "./first.css";

// import Design from "../asset/bgdesign.png"

const first = () => {
  return (
    <>
      {/* <Logo/> */}

      <div className="parent">
        <div className="firstChild">
          <div className="firstChildComponent">
            <p className="firstChildPara"> Let’s get started</p>
            <button type="button" class="login-with-google-btn abc">
              Sign in with Google
            </button>
          </div>
        </div>

        <div className="secondChild">
          <div className="logo">
            {/* irame.ai  */}
            {/* IMPORT LOGO */}i{/* <img src="../asset/logo1.png" alt="" /> */}
            {/* <Logo/> */}
          </div>

          <div className="secondChildpara">
            <p className="para">
              {" "}
              AI that excels in understanding your business dynamics!
            </p>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default first;
