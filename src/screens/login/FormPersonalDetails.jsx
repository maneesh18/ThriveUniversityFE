import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./apply_styles.css";
import "./login_styles.css";

const FormPersonalDetails = (props) => {
  const continuePage = (e) => {
    console.log("Clicked the continue button");
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div className="personal-details-page">
      <div className="login-background-img">
        <img
          className="bgimage-img"
          src="https://media.istockphoto.com/id/1012049016/photo/young-man-writing-college-or-university-application-form-with-pen-and-paper-student-applying.jpg?s=612x612&w=is&k=20&c=0ucIgjGmrBOgxsooJ7ms5xtTK14OpITO3U_Fzf6VRNA="
          alt="home"
        />
      </div>
      <div  className="personal-details-content">
        <form className="personal-details-form">
        <div className="personal-details-input">
          <label style={{ marginBottom: "10px" }}>Enter Full Name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="form-control"
            required="true"
            value={props.formData.full_name}
            onChange={(e) => {
              props.setFormData({
                ...props.formData,
                full_name: e.target.value,
              });
            }}
          />
        </div>
        <div className="personal-details-input">
          <label style={{ marginBottom: "10px" }}>Father Name</label>
          <input
            type="text"
            placeholder="Enter father name"
            className="form-control"
            required="true"
            value={props.formData.father_name}
            onChange={(e) => {
              props.setFormData({
                ...props.formData,
                father_name: e.target.value,
              });
            }}
          />
        </div>

        <div className="personal-details-input">
          <label style={{ marginBottom: "10px" }}>Mother Name</label>
          <input
            type="text"
            placeholder="Enter Mother name"
            className="form-control"
            required="true"
            value={props.formData.mother_name}
            onChange={(e) => {
              props.setFormData({
                ...props.formData,
                mother_name: e.target.value,
              });
            }}
          />
        </div>
        <div className="personal-details-input">
          <label style={{ marginBottom: "10px" }}>Mobile Number</label>
          <input
            type="text"
            placeholder="Enter Mobile number"
            className="form-control"
            required="true"
            value={props.formData.mobile_number}
            onChange={(e) => {
              props.setFormData({
                ...props.formData,
                mobile_number: e.target.value,
              });
            }}
          />
        </div>
        <div className="personal-details-input">
          <label style={{ marginBottom: "10px" }}>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter date of birth"
            required="true"
            value={props.formData.date_of_birth}
            onChange={(e) => {
              props.setFormData({
                ...props.formData,
                date_of_birth: e.target.value,
              });
            }}
          />
        </div>
        
        <div className="personal-details-input">
          <label style={{ marginBottom: "10px" }}>Email Adress</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter date of birth"
            required="true"
            value={props.formData.email}
            onChange={(e) => {
              props.setFormData({
                ...props.formData,
                email: e.target.value,
              });
            }}
          />
        </div>
        <Button color="primary" variant="contained" onClick={continuePage}>
          Continue
        </Button>
        </form>
      </div>
    </div>
  );
};

export default FormPersonalDetails;
