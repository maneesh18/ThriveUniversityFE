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
import { PersonalFormvalidateFields } from "./Validations";

const FormPersonalDetails = (props) => {
  const handleFormValidationValues = (e) => {
    console.log("Invalid email data", props.formData.email);
    let data = { ...props.personalFormDataValidation };
    if (PersonalFormvalidateFields(e.target.name, e.target.value) == false) {
      data[e.target.name] = true;
    } else {
      data[e.target.name] = false;
    }
    props.setPersonalFormData(data);
  };

  function handleErrorValidationDivs(typeName) {
    if (
      props.personalFormDataValidation[typeName] == false ||
      props.formData[typeName].length == 0
    ) {
      return <p style={{ height: "5px" }}>&nbsp;</p>;
    } else {
      return (
        <p style={{ color: "red", height: "5px", fontSize: "13px" }}>
          Invalid {typeName}
        </p>
      );
    }
  }

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const continuePage = (e) => {
    console.log("Clicked the continue button");
    console.log("Form Detaila After personal info", props.formData);
    // setContinueClicked(true);
    //   if (validateFields("email") == false) {
    //     console.log("Inside true statmenet");
    //     setContinueClicked(true);
    //     return;
    //   }else{
    //   console.log("After state setting",continueClicked);
    //   props.nextStep();
    // }
  };
  function disableContinueButtonValidation() {
    if (props.personalFormDataValidation.email == false) {
      return false;
    }
    return true;
  }
  console.log(
    "Continue value eamil value",
    props.personalFormDataValidation.email
  );
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
                  handleFormValidationValues(e);
                }}
                name="full_name"
              />
              {handleErrorValidationDivs("full_name")}
            </div>

            <div className="personal-details-input">
              <label style={{ marginBottom: "10px" }}>Email Adress</label>
              <input
                type="email"
                className="form-control"
                placeholder="enter email address"
                required
                value={props.formData.email}
                onChange={async (e) => {
                  await props.setFormData({
                    ...props.formData,
                    email: e.target.value,
                  });
                  handleFormValidationValues(e);
                }}
                name="email"
              />
              {handleErrorValidationDivs("email")}
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
                  handleFormValidationValues(e);
                }}
                name="father_name"
              />
              {handleErrorValidationDivs("father_name")}
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
                  handleFormValidationValues(e);
                }}
                name="mother_name"
              />
              {handleErrorValidationDivs("mother_name")}
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
                handleFormValidationValues(e);
              }}
              placeholder=""
              className="form-control"
              rows="2"
              cols="100"
            />
            {handleErrorValidationDivs("address")}
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
                  handleFormValidationValues(e);
                }}
                name="mobile_number"
              />
              {handleErrorValidationDivs("mobile_number")}
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
                  handleFormValidationValues(e);
                }}
                max="2018-12-31"
                name="date_of_birth"
              />
              {handleErrorValidationDivs("date_of_birth")}
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
                  handleFormValidationValues(e);
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
              {handleErrorValidationDivs("level_of_education")}
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
                  handleFormValidationValues(e);
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
              {handleErrorValidationDivs("level_of_education")}
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
                  handleFormValidationValues(e);
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
              {handleErrorValidationDivs("level_of_education")}
            </div>
          ) : (
            <div />
          )}
          <ApplicationBottom
            nextStep={props.nextStep}
            prevStep={props.prevStep}
            onContinue={() => {
              continuePage();
            }}
            formData={props.formData}
            disableContinueButton={false &&(
              props.personalFormDataValidation.email ||
              props.personalFormDataValidation.full_name ||
              props.personalFormDataValidation.father_name ||
              props.personalFormDataValidation.mobile_number ||
              props.personalFormDataValidation.mother_name ||
              props.personalFormDataValidation.address ||
              props.personalFormDataValidation.date_of_birth ||
              props.personalFormDataValidation.level_of_education ||
              props.personalFormDataValidation.department ||
              props.personalFormDataValidation.course )
            }
          />
        </form>
      </div>
    </div>
  );
};

export default FormPersonalDetails;
