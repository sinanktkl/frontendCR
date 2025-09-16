import React, { useState } from "react";
import "../pages/Auth.css";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { LoginAPI, RegisterAPI } from "../Services/allAPI";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Auth({ login }) {

  const isLoginForm = login === true ? true : false;

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault()
    // console.log(userData);
    const { username, email, password } = userData
    if (!username || !email || !password) {
      toast.warn("please fill the missing fields")

    } else {

      // patterns
      const emailPattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.(com|gmail\.com|yahoo)$/;
      if (!emailPattern.test(email)) {
        toast.warn("Not a valid Email Format");
        toast.warn("Spaces and special charecters are restricted");
        return; // 
      } else if (/\s/.test(email)) {
        alert("White spaces not allowed");
        return;
      }


      //api call
      const result = await RegisterAPI(userData)


      if (result.status >= 200 && result.status < 300) {
        // if (result.status == 200 || result.status == 201) {
        // if (result.status == 200 ) {
        // console.log(result);
        toast.success(`${username} has registered successfully`)

        setUserData({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login')

      } else {
        // console.log(result);

        toast.warn(result.response.data)
      }

    }

  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = userData
    if (!email || !password) {

      toast.info('please fill the missing fields')
    } else {
      //api call
      try {
        const result = await LoginAPI({ email, password })
        console.log(result);
        if(result.status==200){
          sessionStorage.setItem("username",result.data.existingUser.username)
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("userRole",result.data.existingUser.role)
          sessionStorage.setItem("userId", result.data.existingUser._id)
          
            navigate('/')
            setUserData({
              username:"",
              email:"",
              password:""
            })
        }else{
          toast.error(result.response.data)
        }

      } catch (err) {
        console.log(err);

      }
    }



  }

  return (
    <>

      {/* Fixed Back Button */}
      <a
        href={isLoginForm ? "/register" : "/"}
        style={{
          position: "fixed",
          top: "80px",
          left: "100px",
          color: "white",
          padding: "8px 14px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0px 3px 6px rgba(0,0,0,0.2)",
        }}
      >
        ← Back
      </a>


      <div className="login-container">
        <form className="login-form">
          {isLoginForm ? (
            <>
              <h2>LOGIN FORM</h2>

              <label>EMAIL</label>
              <input type="text" placeholder="Enter Email-Id" required onChange={(e) => setUserData({ ...userData, email: e.target.value })} value={userData.email} />

              <label>PASSWORD</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })} value={userData.password}
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="login-options">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <a href="" className="forgot-link">
                  Forgot Password?
                </a>
              </div>

              <button type="submit" onClick={handleLogin}>LOGIN</button>

              <p className="signup-text">
                Don't have an account? <a style={{ textDecoration: 'underline' }} href="/register">Register</a>
              </p>
            </>
          ) : (
            <>
              <h2>REGISTER FORM</h2>

              <label>USERNAME</label>
              <input type="text" placeholder="Enter username" required onChange={(e) => setUserData({ ...userData, username: e.target.value })} value={userData.username} />

              <label>EMAIL</label>
              <input type="text" placeholder="Enter Email-Id" required onChange={(e) => setUserData({ ...userData, email: e.target.value })} value={userData.email} />

              <label>PASSWORD</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })} value={userData.password}
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>


              <button type="submit" onClick={handleRegister}>REGISTER</button>
              <br /><br />
              <p className="login-text text-light">
                Already have an account?{" "}
                <a style={{ textDecoration: "none" }} href="/login">
                  Login
                </a>
              </p>
            </>
          )}
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default Auth;