import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./apply_styles.css";
import "./login_styles.css";
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
  const [departmentIndex, setDepartmentIndex] = useState(-1);

  return (
    <div className="personal-details-page">
      <div className="personal-details-content">
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
            <label style={{ marginBottom: "10px" }}>Level Of Education</label>
            <select
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                paddingLeft: "10px",
              }}
              onChange={(e) => {
                setDepartmentIndex(e.target.selectedIndex - 1);
                props.setFormData({
                  ...props.formData,
                  department: e.target.value,
                });
              }}
              className="form-control"
              name="department"
            >
              <option>Choose...</option>
              {LEVEL_OF_EDUCATION_LIST.map(({ key, heading }) => {
                return <option key={key}>{heading}</option>;
              })}
            </select>
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
            <label style={{ marginBottom: "10px" }}>Department</label>
            <select
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                paddingLeft: "10px",
              }}
              onChange={(e) => {
                setDepartmentIndex(e.target.selectedIndex - 1);
                props.setFormData({
                  ...props.formData,
                  department: e.target.value,
                });
              }}
            >
              <option>Choose...</option>
              {DEPARTMENT_LIST.map(({ key, image, heading, body }) => {
                return <option key={key}>{heading}</option>;
              })}
            </select>
          </div>
          {departmentIndex != -1 ? (
            <div className="personal-details-input">
              <label style={{ marginBottom: "10px" }}>Courses</label>
              <select
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "8px",
                  paddingLeft: "10px",
                }}
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    course: e.target.value,
                  });
                }}
              >
                <option>Choose...</option>
                {COURSE_LIST[departmentIndex].map(
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
        <Button color="primary"  onClick={back}>
            Back
          </Button>
        <Button color="primary"  onClick={continuePage}>
            Continue
          </Button>
      </div>
    </div>
  );
};

export default FormPersonalDetails;
