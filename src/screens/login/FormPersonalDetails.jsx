import React, { useState } from "react";
import "./apply_styles.css";
import "./login_styles.css";

import ApplicationBottom from "./ApplicationBottom";
import {
  DEPARTMENT_LIST,
  COURSE_LIST,
  LEVEL_OF_EDUCATION_LIST,
} from "../academics/AcademicConstants";
//level of education
//address
//dept
//courses

const FormPersonalDetails = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const continuePage = (e) => {
    console.log("Clicked the continue button");
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div className="personal-details-page">
      <div className="personal-details-content">
        <div className="heading-font wrapper-1">
          PERSONAL<div> DETAILS</div>
        </div>
        <form className="personal-details-form">
          <div className="flex-form-wrapper">
            <div className="personal-details-input">
              <label style={{ marginBottom: "10px" }}>Enter Full Name</label>
              <input
                type="text"
                placeholder="enter name"
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
              <label style={{ marginBottom: "10px" }}>Email Adress</label>
              <input
                type="email"
                className="form-control"
                placeholder="enter email address"
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
          </div>

          <div className="flex-form-wrapper">
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
          </div>
          <div className="personal-details-input">
            <label style={{ marginBottom: "10px" }}>Address</label>
            <textarea
              name="address"
              value={props.formData.address}
              onChange={(e) => {
                props.setFormData({
                  ...props.formData,
                  address: e.target.value,
                });
              }}
              placeholder=""
              className="form-control"
              rows="2"
              cols="100"
            />
          </div>
            <div className="flex-form-wrapper" >
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
          </div>
          <div  className="flex-form-wrapper">
          <div className="personal-details-input">
            <label style={{ marginBottom: "10px" }}>Level Of Education</label>
            <select
              
              onChange={(e) => {
                props.setFormData({
                  ...props.formData,
                  level_of_education: e.target.value,
                });
              }}
              className="form-control"
              name="level_of_education"
            >
              <option> {props.formData.level_of_education != "" ? props.formData.level_of_education : "Choose.."} </option>
              {LEVEL_OF_EDUCATION_LIST.map(({ key, heading }) => {
                return <option key={key}>{heading}</option>;
              })}
            </select>
          </div>

        

        
          <div className="personal-details-input">
            <label style={{ marginBottom: "10px" }}>Department</label>
            <select
             
             className="form-control"
              onChange={(e) => {
                props.setDepartmentIndex(e.target.selectedIndex - 1);
                props.setFormData({
                  ...props.formData,
                  department: e.target.value,
                });
              }}
              name="department"
            >
              <option>{props.formData.department != "" ? props.formData.department : "Choose.."}</option>
              {DEPARTMENT_LIST.map(({ key, image, heading, body }) => {
                return <option key={key}>{heading}</option>;
              })}
            </select>
          </div>
          </div>
          {props.departmentIndex != -1 ? (
            <div className="personal-details-input">
              <label style={{ marginBottom: "10px" }}>Courses</label>
              <select
               className="form-control"
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    course: e.target.value,
                  });
                }}
                name="course"
              >
                <option>{props.formData.course != "" ? props.formData.course : "Choose.."}</option>
                {COURSE_LIST[props.departmentIndex].map(
                  ({ courseName, shortForm }) => {
                    return <option key={shortForm}>{courseName}</option>;
                  }
                )}
              </select>
            </div>
          ) : (
            <div />
          )}
        </form>
      </div>
      
      <ApplicationBottom nextStep={props.nextStep} prevStep={props.prevStep} onContinue={()=>console.log("Form Detaila After personal info",props.formData)} formData={props.formData}  />
    </div>
  );
};

export default FormPersonalDetails;
