import React, { useState , useEffect} from "react";
import "./FirstPage.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import Irame from '../../assets/irame.png'
// import { FirstPage } from "..";

// import Design from "../asset/bgdesign.png"

const FirstPage = () => {
  const [accessToken, setAccessToken] = useState({});
  const [user, setUser] = useState(null);


  const handleSuccess = (credentialResponse) => {
    console.log("Access token received:", credentialResponse.credential);
    setAccessToken(credentialResponse.credential);
  
    // Decode the access token
    const decode = jwtDecode(credentialResponse.credential);
    const { name } = decode; // Assuming 'name' is a property in the decoded token
    console.log("name:", name);
  
    // Store the access token and user information in localStorage
    localStorage.setItem("accessToken", credentialResponse.credential);
    localStorage.setItem("user", JSON.stringify({ name }));
  };

  const handleError = (err) => {
    console.error("Login Error:", err);
    
  };

  useEffect(() => {
    // Check if there is an access token stored in localStorage 
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
    if (storedAccessToken) {
      setAccessToken(storedAccessToken && storedUser);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <div className="parent">
        <div className="firstChild">
          <div className="firstChildComponent">
            <p className="firstChildPara"> Let’s get started</p>
            <GoogleOAuthProvider clientId="">
              <GoogleLogin onSuccess={handleSuccess} onError={handleError}>
                Sign in with Google
              </GoogleLogin>
            </GoogleOAuthProvider>
                            {/* <button type="button" class="login-with-google-btn abc">
              Continue with Google
            </button> */}
          </div>
        </div>

        <div className="secondChild">
          <div className="logo">
          {/* <img src="../../assets/irame.png" alt="Logo" /> */}
            {/* irame.ai  */}
            {/* IMPORT LOGO */}
            <img src={Irame} alt="" />
            {/* <Irame/> */}
          </div>

          <div className="secondChildpara">
            <p className="para">
              {" "}
              AI that excels in understanding your business dynamics!
            </p>

            <hr class="horizontal-line" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;




