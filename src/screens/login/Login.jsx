import React from "react";
import Button from 'react-bootstrap/Button';
import {  LOGIN_CONTENT, LOGIN_IMAGE } from "../../Constants";
import './login_styles.css';
export default function Login () {
   
    return (
      <div>
        <br></br>
         <div className="login-content">
         <img className='login-content-img' src={LOGIN_IMAGE} alt="home" />
      <div className="login-form-content-div">
        <form className="container">
        <h3 className="heading-font"> Sign In</h3>
        <p>
          {LOGIN_CONTENT}
        </p>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required="true"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required="true"
          />
        </div>
        <div >
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