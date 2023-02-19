import React from "react";
import Button from 'react-bootstrap/Button';
import {  LOGIN_CONTENT, LOGIN_CONTENT1, LOGIN_IMAGE } from "../../Constants";
import './login_styles.css';
import { ImQuotesLeft,ImQuotesRight } from "react-icons/im";

export default function Login () {
   
    return (
      <div className="login-component">
        <p className="login-top-text"><sup><ImQuotesLeft style={{height:"30px",width:"30px",position:"relative",right:"10px"}}/></sup>{LOGIN_CONTENT1}<sup><ImQuotesRight  style={{height:"30px",width:"30px",position:"relative",left:"10px"}}/></sup></p>
         <div className="login-content">
         <img className='login-content-img' src={LOGIN_IMAGE} alt="home" />
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
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required="true"
          />
        </div>
        <div style={{textAlign:"center"}}>
          <button type="submit" className="btn btn-primary submit-btn" style={{margin:"0px auto"}}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        </form>
        </div>
        </div>
        <br></br>
        <div className="public-btn-div">
          
        <Button  variant="warning"  className="public-btn">Apply</Button>
          
        <Button  variant="warning" className="public-btn" >Track Application</Button>
      <br></br>
      </div>
      <br></br>
    
    </div>
    )
  
}