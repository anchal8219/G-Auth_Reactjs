// import { GoogleLogin } from "@react-oauth/google";
// import "./App.css";
// import { jwtDecode } from "jwt-decode";

import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

function App() {
  const login = useGoogleLogin({
    onSuccess: async(response) => {
      try{
        const res = await axios.post(
          "http://localhost:8000/auth/profile",
          {
            access_token: response.access_token
          })
          console.log("Profile data:", res.data);
      }catch(err){ 
        console.log(err);
      }
    }
    // tokenResponse => console.log(tokenResponse),
  });
  return (
    <button onClick={() => login()}>Sign in with Google 🚀</button>
  );
}

export default App;





// import googleButton from './btn_google_signin_dark_pressed_web.png'
// import './App.css'

// function navigate(url){
//   window.location.href = url;
// }

// async function auth(){
//   const response =await fetch('http://127.0.0.1:3000/request',{method:'post'});

//   const data = await response.json();
//   console.log(data);
//   navigate(data.url);

// }


// function App() {


//   return (
//     <>
// <h1>Welcome!</h1>

// <button className="btn-auth"  type="button" onClick={()=> auth()}>
//             <img className="btn-auth-img" src={googleButton} alt='google sign in'/>
//             </button>
//     </>
//   )
// }

// export default App