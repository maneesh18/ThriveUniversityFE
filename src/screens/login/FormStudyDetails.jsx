import React, { useEffect } from "react";
import "./apply_styles.css";
import "./login_styles.css";

import ApplicationBottom from "./ApplicationBottom";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import ProgressStep from "./ProgressStep";
import { StudyFormvalidateFields, WorkFormvalidateFields } from "./Validations";

const FormStudyDetails = (props) => {
 

  const addStudyValidationState = (e, index) => {
    if (props.studyFormFieldsValidation[index] === undefined) {
      console.log("Inside If statement of study details");
      let validationObject = {
        college_name: true,
        gpa: true,
        file: true,
        level_of_education: true,
      };
      props.setStudyFormFieldsValidation([
        ...props.studyFormFieldsValidation,
        validationObject,
      ]);

      handleFormValidationValues(e,index);
    }
    else{

    handleFormValidationValues(e,index);

    }
  };

  const handleFormValidationValues = (e, index) => {
    console.log("Inside validation call method",props.studyFormFieldsValidation);
    // if (props.studyFormFieldsValidation[index] !== undefined) {
      console.log("Inside study fomr data", props.studyFormFieldsValidation);
      let data = [...props.studyFormFieldsValidation];
      if (StudyFormvalidateFields(e.target.name, e.target.value) == false) {
        data[index][e.target.name] = true;
      } else {
        data[index][e.target.name] = false;
      }
      props.setStudyFormFieldsValidation(data);
    // }
  };

  const handleFileValidation = (e, index) => {
    let data = [...props.studyFormFieldsValidation];
    if (StudyFormvalidateFields(e.target.name, e.target) == false) {
      data[index][e.target.name] = true;
    } else {
      data[index][e.target.name] = false;
    }
    props.setStudyFormFieldsValidation(data);
  };

  function handleErrorValidationDivs(typeName, index) {
    if (
      props.studyFormFieldsValidation[index] === undefined ||
      props.studyFormFieldsValidation[index][typeName] == false ||
      props.studyFormFieldsValidation[index][typeName].length == 0
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

  const handleWorkFormValidationValues = (e, index) => {
    // console.log("Invalid email data", props.formData.email);
    let data = [...props.workExpformFieldsValidation];
    if (WorkFormvalidateFields(e.target.name, e.target.value) == false) {
      data[index][e.target.name] = true;
    } else {
      data[index][e.target.name] = false;
    }
    props.setWorkExpFormFieldsValidation(data);
  };

  function handleWorkErrorValidationDivs(typeName, index) {
    if (
      props.workExpformFieldsValidation[index][typeName] == false
      //  || props.formFields[index][typeName].length == 0
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

  function handleContinueClick() {
    let tempBool = false;
    console.log("Inside hanfle continue click", tempBool);
    props.studyFormFieldsValidation.forEach((data) => {
      tempBool =
        tempBool ||
        data.college_name == true ||
        data.gpa == true ||
        data.file == true ||
        data.level_of_education == true;
    });
    props.workExpformFieldsValidation.forEach((data) => {
      tempBool =
        tempBool ||
        data.company == true ||
        data.start_date == true ||
        data.end_date == true ||
        data.designation == true ||
        data.description == true;
    });

    return tempBool;
  }

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const continuePage = (e) => {
    e.preventDefault();
    props.setFormData({
      ...props.formData,
      employment_status: props.workExpformFields,
      education: props.formFields,
    });
    props.nextStep();
    console.log("Education Form details", props.formData);
  };
  const handleOnContinue = () => {
    props.setFormData({
      ...props.formData,
      employment_status: props.workExpformFields,
      education: props.formFields,
    });
  };

  return (
    <div className="study_details-content">
      <ProgressStep step={props.step}></ProgressStep>
      <div className="study_details_wrapper">
        <div className="heading-font wrapper-1 prof-wrapper-1">
          PROFESSIONAL<div> DETAILS</div>
        </div>

        <div className="details-parent-div">
          <div className="study-details-education-div">
            <div className="details-header-div" onClick={props.addFields}>
              <p>
                <AiOutlinePlus
                  size="1.5em"
                  style={{ position: "relative", bottom: "2px" }}
                />{" "}
                Add Education Experience
              </p>
            </div>

            <form onSubmit={props.submit} className="study-details-form">
              {props.formFields.map((form, index) => {
                console.log("Education updated", props.openEducation, index);
                return index + 1 == props.openEducation ? (
                  <div key={index + 1} className="single-content-parent-div">
                    <div className="side-heading" style={{ fontSize: "20px" }}>
                      Education {index + 1}
                    </div>
                    <div className="single-content-vertical-div">
                      <div>
                        <div className="input-element-div">
                          <label style={{ marginBottom: "10px" }}>
                            College/School Name
                          </label>
                          <input
                            name="college_name"
                            placeholder="College Name"
                            onChange={(event) => {
                              props.handleFormChange(event, index);
                              addStudyValidationState(event, index); 
                            }}
                            value={form.college_name}
                            className="form-control"
                          />
                          {handleErrorValidationDivs("college_name", index)}
                        </div>
                        <div className="input-element-div">
                          <label style={{ marginBottom: "10px" }}>
                            GPA/Percentage
                          </label>
                          <input
                            name="gpa"
                            placeholder="Result"
                            onChange={(event) => {
                              props.handleFormChange(event, index);
                              addStudyValidationState(event, index);
                            }}
                            value={form.gpa}
                            className="form-control"
                            type="number"
                            // onBlur={(event) => {
                            //   handleFormValidationValues(event, index);
                            // }}
                          />
                        </div>
                        {handleErrorValidationDivs("gpa", index)}
                      </div>

                      <div>
                        <div className="input-element-div">
                          <label style={{ marginBottom: "10px" }}>
                            Upload Memo
                          </label>
                          <input
                            name="file"
                            placeholder="Upload"
                            onChange={(event) => {
                              props.handleFormFileUploads(event, index);
                              addStudyValidationState(event, index);
                            }}
                            className="form-control"
                            type="file"
                            // onBlur={(event) => {
                            //   handleFileValidation(event, index);
                            // }}
                          />
                          {form.file == null ? (
                            <p style={{ marginBottom: "0px" }}></p>
                          ) : (
                            <p style={{ fontSize: "10px" }}>
                              {form.file["name"]}
                            </p>
                          )}
                          {handleErrorValidationDivs("file", index)}
                        </div>
                        <div className="input-element-div">
                          <label style={{ marginBottom: "10px" }}>
                            Level of Education
                          </label>
                          <select
                            onChange={(event) => {
                              props.handleFormChange(event, index);
                              addStudyValidationState(event, index);
                            }}
                            name="level_of_education"
                            className="form-control"
                            // onBlur={(event) => {
                            //   handleFormValidationValues(event, index);
                            // }}
                          >
                            <option>
                              {form.level_of_education != ""
                                ? form.level_of_education
                                : "Choose.."}
                            </option>
                            <option>UG</option>
                            <option>Masters</option>
                          </select>
                          {handleErrorValidationDivs(
                            "level_of_education",
                            index
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="delete-button-div">
                      <div
                        className="delete-button"
                        onClick={() => props.removeFields(index)}
                      >
                        <div style={{ fontSize: "18px" }}> Delete</div>{" "}
                        <MdOutlineDelete size="1.5em" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="side-heading header-div ">
                    <div
                      className="details-wrapper-1"
                      onClick={() => props.setOpenEducation(index + 1)}
                    >
                      Education {index + 1}
                    </div>
                    <div
                      className="delete-icon-div"
                      onClick={() => props.removeFields(index)}
                    >
                      <MdOutlineDelete
                        size="1.5em"
                        onClick={() => props.removeFields(index)}
                        style={{}}
                      />
                    </div>
                  </div>
                );
              })}
            </form>
          </div>

          <div className="work-details-education-div">
            <div className="details-header-div" onClick={props.addWorkFields}>
              <p>
                <AiOutlinePlus
                  size="1.5em"
                  style={{ position: "relative", bottom: "2px" }}
                />{" "}
                Add Work Experience
              </p>
            </div>

            <form onSubmit={props.submit} className="study-details-form">
              {props.workExpformFields.map((form, index) => {
                return index + 1 == props.openWork ? (
                  <div key={index} className="single-content-parent-div">
                    <div>
                      <div
                        className="side-heading"
                        style={{ fontSize: "20px" }}
                      >
                        Work Experience {index + 1}
                      </div>
                      <div className="single-content-vertical-div">
                        <div>
                          <div className="input-element-div">
                            <label style={{ marginBottom: "10px" }}>
                              Company Name
                            </label>
                            <input
                              name="company"
                              placeholder="Company Name"
                              onChange={(event) => {
                                props.handleWorkFormChange(event, index);
                                handleWorkFormValidationValues(event, index);
                              }}
                              value={form.company}
                              className="form-control"
                            />
                            {handleWorkErrorValidationDivs("company", index)}
                          </div>

                          <div className="input-element-div">
                            <label style={{ marginBottom: "10px" }}>
                              From *
                            </label>
                            <input
                              name="start_date"
                              placeholder="pick a date"
                              onChange={(event) => {
                                props.handleWorkFormChange(event, index);
                                handleWorkFormValidationValues(event, index);
                              }}
                              value={form.start_date}
                              className="form-control"
                              required="true"
                              type="date"
                            />
                            {handleWorkErrorValidationDivs("start_date", index)}
                          </div>
                        </div>
                        <div>
                          <div className="input-element-div">
                            <label style={{ marginBottom: "10px" }}>
                              Designation
                            </label>
                            <input
                              name="designation"
                              placeholder="Role"
                              onChange={(event) => {
                                props.handleWorkFormChange(event, index);
                                handleWorkFormValidationValues(event, index);
                              }}
                              value={form.designation}
                              className="form-control"
                            />
                            {handleWorkErrorValidationDivs(
                              "designation",
                              index
                            )}
                          </div>

                          <div className="input-element-div">
                            <label style={{ marginBottom: "10px" }}>To *</label>
                            <input
                              name="end_date"
                              placeholder="Pick a data"
                              onChange={(event) => {
                                props.handleWorkFormChange(event, index);
                                handleWorkFormValidationValues(event, index);
                              }}
                              value={form.end_date}
                              className="form-control"
                              type="date"
                            />
                            {handleWorkErrorValidationDivs("end_date", index)}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "93%",
                          marginLeft: "20px",
                          marginBottom: "20px",
                        }}
                      >
                        <label style={{ marginBottom: "10px" }}>
                          Description
                        </label>
                        <textarea
                          name="description"
                          onChange={(event) => {
                            props.handleWorkFormChange(event, index);
                            handleWorkFormValidationValues(event, index);
                          }}
                          value={form.description}
                          placeholder="write awayy..."
                          className="form-control"
                          rows="2"
                          cols="60"
                        />
                        {handleWorkErrorValidationDivs("description", index)}
                      </div>
                    </div>

                    <div className="delete-button-div">
                      <div
                        className="delete-button"
                        onClick={() => props.removeWorkFields(index)}
                      >
                        <div style={{ fontSize: "18px" }}> Delete</div>{" "}
                        <MdOutlineDelete size="1.5em" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="side-heading header-div ">
                    <div
                      className="details-wrapper-1"
                      onClick={() => props.setOpenWork(index + 1)}
                    >
                      Work Experience {index + 1}
                    </div>

                    <div
                      className="delete-icon-div"
                      onClick={() => props.removeWorkFields(index)}
                    >
                      <MdOutlineDelete
                        size="1.5em"
                        onClick={() => props.removeWorkFields(index)}
                        style={{}}
                      />
                    </div>
                  </div>
                );
              })}
            </form>
          </div>
        </div>
      </div>

      <ApplicationBottom
        nextStep={props.nextStep}
        prevStep={props.prevStep}
        onContinue={handleOnContinue}
        formData={props.formData}
        disableContinueButton={handleContinueClick()}
      />
    </div>
  );
};

export default FormStudyDetails;
