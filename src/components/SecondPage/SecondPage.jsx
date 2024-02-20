import React, { useState , useEffect} from "react";
import "./SecondPage.css";

const SecondPage = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Retrieve user information from local storage
    const storedUser = localStorage.getItem("user");
    const initialUsername = storedUser ? JSON.parse(storedUser).name : "";
    setUsername(initialUsername); // Set the initial value of username state variable
  }, []);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="parent">
        <div className="firstChild">
          <div className="firstChildComponent">
            <h1>Brace for the magic!!!!</h1>
            <div className="form">
            <form onSubmit={handleSubmit}>
                <label>
                  Your Name:
                  <input
                    type="text"
                    name="name"
                    value={username}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  {/* Your Email: */}
                  <input type="text" name="email" />
                </label>
                <input type="submit" value="Continue->" />
              </form>
          </div>
          </div>
          
        </div>
        <div className="secondChild">
          <div className="logo">
            {/* irame.ai  */}
            {/* IMPORT LOGO */}
            {/* <img src="../asset/logo1.png" alt="" /> */}
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

export default SecondPage;
