import React, { useState } from "react";
import "./apply_styles.css";
import "./login_styles.css";

import ApplicationBottom from "./ApplicationBottom";
import {
  DEPARTMENT_LIST,
  COURSE_LIST,
  LEVEL_OF_EDUCATION_LIST,
} from "../academics/AcademicConstants";
import ProgressStep from "./ProgressStep";
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
  const [continueClicked, setContinueClicked] = useState(false);
  function validateFields(inputFieldName) {
    console.log(
      "TEsting for the input feilds",
      props.formData[inputFieldName],
      inputFieldName
    );
    switch (inputFieldName) {
      case "email":
        if (
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            props.formData[inputFieldName]
          ) ||
          props.formData[inputFieldName].length == 0
        ) {
          return true;
        }
        return false;
      // case "full_name":
      //   console.log("Inside");
      //   if (
      //     props.formData[inputFieldName].length > 3 ||
      //     props.formData[inputFieldName].length == 0
      //   ) {
      //     return <p style={{ height: "5px" }}>&nbsp;</p>;
      //   }
      //   return (
      //     <p style={{ color: "red", height: "5px", fontSize: "13px" }}>
      //       Invalid Name
      //     </p>
      //   );
      // case "mother_name":
      //   console.log("Inside");
      //   if (
      //     props.formData[inputFieldName].length > 3 ||
      //     props.formData[inputFieldName].length == 0
      //   ) {
      //     return <p style={{ height: "5px" }}>&nbsp;</p>;
      //   }
      //   return (
      //     <p style={{ color: "red", height: "5px", fontSize: "13px" }}>
      //       Invalid Mother Name
      //     </p>
      //   );
      // case "father_name":
      //   console.log("Inside");
      //   if (
      //     props.formData[inputFieldName].length > 3 ||
      //     props.formData[inputFieldName].length == 0
      //   ) {
      //     return <p style={{ height: "5px" }}>&nbsp;</p>;
      //   }
      //   return (
      //     <p style={{ color: "red", height: "5px", fontSize: "13px" }}>
      //       Invalid Father name
      //     </p>
      //   );
      // case "address":
      //   console.log("Inside");
      //   if (
      //     props.formData[inputFieldName].length > 3 ||
      //     props.formData[inputFieldName].length == 0
      //   ) {
      //     return <p style={{ height: "5px" }}>&nbsp;</p>;
      //   }
      //   return (
      //     <p style={{ color: "red", height: "5px", fontSize: "13px" }}>
      //       Invalid Address
      //     </p>
      //   );
      // case "mobile_number":
      //   console.log("Inside");
      //   if (
      //     props.formData[inputFieldName].length == 10 ||
      //     props.formData[inputFieldName].length == 0
      //   ) {
      //     return <p style={{ height: "5px" }}>&nbsp;</p>;
      //   }
      //   return (
      //     <p style={{ color: "red", height: "5px", fontSize: "13px" }}>
      //       Invalid Mobile number
      //     </p>
      //   );
      // case "date_of_birth":
      //   console.log("Inside");
      //   if (props.formData[inputFieldName] != null) {
      //     return <p style={{ height: "5px" }}>&nbsp;</p>;
      //   }
      //   return (
      //     <p style={{ color: "red", height: "5px", fontSize: "13px" }}>
      //       Invalid date
      //     </p>
      //   );

      default:
        return false;
    }
  }

  return (
    <div className="personal-details-page">
      <ProgressStep step={props.step}></ProgressStep>
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

              {validateFields("full_name")}
            </div>

            <div className="personal-details-input">
              <label style={{ marginBottom: "10px" }}>Email Adress</label>
              <input
                type="email"
                className="form-control"
                placeholder="enter email address"
                required
                value={props.formData.email}
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    email: e.target.value,
                  });
                }}
              />
              {continueClicked == false ? (
                <p style={{ height: "5px" }}>&nbsp;</p>
              ) : (
                <p style={{ color: "red", height: "5px", fontSize: "13px" }}>
                  Invalid EMAIL ID
                </p>
              )}
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
              {validateFields("father_name")}
            </div>

            <div className="personal-details-input">
              <label style={{ marginBottom: "10px" }}>Mother Name</label>
              <input
                type="text"
                placeholder="Enter Mother name"
                className="form-control"
                required
                value={props.formData.mother_name}
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    mother_name: e.target.value,
                  });
                }}
              />
              {validateFields("mother_name")}
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

            {validateFields("address")}
          </div>
          <div className="flex-form-wrapper">
            <div className="personal-details-input">
              <label style={{ marginBottom: "10px" }}>Mobile Number</label>
              <input
                type="tel"
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
              {validateFields("mobile_number")}
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
                max="2018-12-31"
              />
              {validateFields("date_of_birth")}
            </div>
          </div>
          <div className="flex-form-wrapper">
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
                <option>
                  {" "}
                  {props.formData.level_of_education != ""
                    ? props.formData.level_of_education
                    : "Choose.."}{" "}
                </option>
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
                <option>
                  {props.formData.department != ""
                    ? props.formData.department
                    : "Choose.."}
                </option>
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
                <option>
                  {props.formData.course != ""
                    ? props.formData.course
                    : "Choose.."}
                </option>
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
          <ApplicationBottom
            nextStep={props.nextStep}
            prevStep={props.prevStep}
            onContinue={() => {
              console.log("Form Detaila After personal info", props.formData);
              // setContinueClicked(true);
              if (validateFields("email") == false) {
                setContinueClicked(true);
              }
            }}
            formData={props.formData}
          />
        </form>
      </div>
    </div>
  );
};

export default FormPersonalDetails;
