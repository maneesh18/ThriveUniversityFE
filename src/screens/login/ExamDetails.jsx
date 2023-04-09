import React, { useEffect, useState } from "react";

import "./apply_styles.css";
import "./login_styles.css";
import ProgressStep from "./ProgressStep";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineDown } from "react-icons/ai";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import ApplicationBottom from "./ApplicationBottom";
import { ScoreFormvalidateFields } from "./Validations";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const ExamDetails = (props) => {




  


  const handleExamFormValidationValues = (e, index) => {
    console.log("Inside validation call method",props.scoreformFieldsValidation);
    // if (props.studyFormFieldsValidation[index] !== undefined) {
      console.log("Inside study fomr data", props.scoreformFieldsValidation);
      let data = [...props.scoreformFieldsValidation];
      if (ScoreFormvalidateFields(e.target.name, e.target.value) == false) {
        data[index][e.target.name] = true;
      } else {
        data[index][e.target.name] = false;
      }
      props.setScoreFormFieldsValidation(data);
    // }
  };

  const handleExamFileValidation = (e, index) => {
    let data = [...props.scoreformFieldsValidation];
    let x=ScoreFormvalidateFields(e.target.name, e.target);
    if (x == false) {
      data[index][e.target.name] = true;
    } else {
      data[index][e.target.name] = false;
    }
    props.setScoreFormFieldsValidation(data);
  };

  function handleExamErrorValidationDivs(typeName, index) {
    if (
      props.scoreformFieldsValidation[index] === undefined ||
      props.scoreformFieldsValidation[index][typeName] == false ||
      props.scoreformFieldsValidation[index][typeName].length == 0
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
    e.preventDefault();
    props.setFormData({
      ...props.formData,
      exam_details: props.scoreformFields,
    });
    props.nextStep();
  };
  const handleOnContinue = () => {
    props.setFormData({
      ...props.formData,
      exam_details: props.scoreformFields,
    });
    console.log("Called from bottom ui");
  };

  //   window.onscroll = function () {
  //     let myNav = document.getElementById("nav");
  //     if (
  //       document.body.scrollTop >= 200 ||
  //       document.documentElement.scrollTop >= 200
  //     ) {
  //       myNav.classList.add("top-navbar-scroll");
  //       myNav.classList.remove("top-navbar");
  //     } else {
  //       myNav.classList.add("top-navbar");
  //       myNav.classList.remove("top-navbar-scroll");
  //     }
  //   };
  const downloadPdfDocument = () => {
    const input = document.getElementById("exam-details");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 20, 20, 180, 160);
      pdf.save("download.pdf");
    });
  };

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);

    console.log("Inside change Handler", fileDataURL);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      console.log("Inside use effect", fileDataURL);
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <div className="study_details-content">
      <ProgressStep step={props.step}></ProgressStep>
      <div className="study_details_wrapper">
        <div className="heading-font wrapper-1 prof-wrapper-1">
          EXAM<div> DETAILS</div>
        </div>
        <div className="details-parent-div">
          <div>
            <div className="study-details-education-div">
              <div
                className="details-header-div"
                onClick={props.addScoreFields}
              >
                <p>
                  <AiOutlinePlus
                    size="1.5em"
                    style={{ position: "relative", bottom: "2px" }}
                  />{" "}
                  Add Exam Details
                </p>
              </div>

              <form onSubmit={props.submit} className="study-details-form">
                {props.scoreformFields.map((form, index) => {
                  console.log("Education updated", props.openScore, index);
                  return index + 1 == props.openScore ? (
                    <div key={index + 1} className="single-content-parent-div">
                      <div
                        className="side-heading"
                        style={{ fontSize: "20px" }}
                      >
                        Exam Details {index + 1}
                      </div>
                      <div className="single-content-vertical-div">
                        <div>
                          <div className="input-element-div">
                            <label style={{ marginBottom: "10px" }}>
                              Score
                            </label>
                            <input
                              name="score"
                              placeholder="Score.."
                              onChange={(event) =>{
                                props.handleScoreFormChange(event, index);
                                handleExamFormValidationValues(event, index);
                              }}
                              value={form.score}
                              className="form-control"
                            />
                            {handleExamErrorValidationDivs("score", index)}
                          </div>
                          <div className="input-element-div">
                            <label style={{ marginBottom: "10px" }}>
                              Additional Data
                            </label>
                            <input
                              name="additional_data"
                              placeholder="addtional info"
                              onChange={(event) =>{
                                props.handleScoreFormChange(event, index)
                                handleExamFormValidationValues(event, index);
                              }}
                              value={form.additional_data}
                              className="form-control"
                            />
                            {handleExamErrorValidationDivs("additional_data", index)}
                          </div>
                        </div>

                        <div>
                          <div className="input-element-div">
                            <label style={{ marginBottom: "10px" }}>
                              Upload Score
                            </label>
                            <input
                              name="upload_score"
                              placeholder="Upload"
                              onChange={(event) =>{
                                props.handleScoreFormFileUploads(event, index);
                                handleExamFileValidation(event,index);
                              }}
                              type="file"
                              className="form-control"
                            />
                            {form.upload_score == null ? (
                              <p style={{ marginBottom: "0px" }}></p>
                            ) : (
                              <p style={{ fontSize: "10px", marginBottom: "0px" }}>
                                {form.upload_score["name"]}
                              </p>
                            )}
                            {handleExamErrorValidationDivs("upload_score", index)}
                          </div>
                          <div className="input-element-div">
                            <label style={{ marginBottom: "10px" }}>
                              Exam Name
                            </label>
                            <select
                              onChange={(event) =>{
                                props.handleScoreFormChange(event, index);
                                handleExamFormValidationValues(event, index);
                              }}
                              name="exam_name"
                              className="form-control"
                            >
                              <option>
                                {form.exam_name != ""
                                  ? form.exam_name
                                  : "Choose.."}
                              </option>

                              <option>GRE</option>
                              <option>IELTS</option>
                              
                            </select>
                            {handleExamErrorValidationDivs("exam_name", index)}
                          </div>
                        </div>
                      </div>

                      <div className="delete-button-div">
                        <div
                          className="delete-button"
                          onClick={() => props.removeScoreFields(index)}
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
                        onClick={() => props.setOpenScore(index + 1)}
                      >
                        Exam Details {index + 1}
                      </div>
                      <div
                        className="delete-icon-div"
                        onClick={() => props.removeScoreFields(index)}
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
          </div>
        </div>
      </div>

      <ApplicationBottom
        nextStep={props.nextStep}
        prevStep={props.prevStep}
        onContinue={handleOnContinue}
        formData={props.formData}
      />
    </div>
  );
};

export default ExamDetails;
