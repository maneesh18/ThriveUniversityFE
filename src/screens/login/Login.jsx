import React, { useState } from "react";
import {  LOGIN_CONTENT, LOGIN_CONTENT1 } from "../../Constants";
import './login_styles.css';
import { ImQuotesLeft,ImQuotesRight } from "react-icons/im";
import axios from "axios"
import { LocalDomain } from "../../api_labels";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import {useNavigate } from "react-router-dom";

export default function Login () {
  const [showPassword,setShowPassword]=useState("password");
 function handleLogin(e){
  e.preventDefault();
  axios.get(
      LocalDomain+"/login/result")
      .then((json) => console.log("Api result",json));
    
  }
  const togglePassword =()=>{
    if(showPassword==="password")
    {
     setShowPassword("text")
     return;
    }
    setShowPassword("password")
  }
   
  const navigate = useNavigate();
  
  function handleApply(event) {
    console.log("Apply button clicked");
    navigate('/apply',{replace:true});
  }
    return (
      <div className="login-component">
        <div className="login-background-img">
        <img className='login-bgimage-img' src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="home" />
          </div>
        <div className="login">
        <p className="login-top-text"><sup><ImQuotesLeft style={{height:"30px",width:"30px",position:"relative",right:"10px"}}/></sup>{LOGIN_CONTENT1}<sup><ImQuotesRight  style={{height:"30px",width:"30px",position:"relative",left:"10px"}}/></sup></p>
      <div className="login-form-content-div">
        <form className="container">
        <h3 className="heading-font"> Sign In</h3>
        <p>
          {LOGIN_CONTENT}
        </p>
        <div className="mb-3">
          <label style={{marginBottom:"10px"}}>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required="true"
          />
        </div>
        <div className="mb-3">
          <label style={{marginBottom:"10px"}}>Password</label>
          <div className="password-input">

          <input 
            type={showPassword}
            className="form-control"
            placeholder="Enter password"
            required="true"/>
          { showPassword==="password"? <AiFillEye onClick={togglePassword} fill="black"style={{height:"40px",width:"20px",position:"relative",right:"30px"}}/> :<AiFillEyeInvisible onClick={togglePassword} fill="black"style={{height:"30px",width:"20px",position:"relative",right:"30px"}}/> }
            </div>

        </div>
        <div style={{textAlign:"center"}}>
          <button type="submit" className="btn btn-primary submit-btn" style={{margin:"0px auto"}} onClick={handleLogin}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
           <a href="#" style={{color:"white"}}>Forgot password?</a>
        </p>
        </form>
        </div>
        <div className="public-btn-div">
          
        <button type="submit" className="btn btn-primary public-btn" style={{margin:"0px auto"}} onClick={handleApply} >
            Apply
          </button>
        
        
          <button type="submit" className="btn btn-primary public-btn" style={{margin:"0px auto"}} >
          Track Application
          </button>
      

      </div>
     
     
      
      </div>
      
    {/* </div> */}
    </div>
    )
  
}