import React, { useEffect, useState } from "react";
import "./apply_styles.css";
import "./login_styles.css";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import "./preview_details.css";
import CommonPreviewLabelValue from "./CommonPreviewLabelValue";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const PreviewDetails = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const continuePage = (e) => {
    e.preventDefault();
    // props.nextStep();
    downloadPdfDocument();
    console.log("Education Form details", props.formData);
  };
  const downloadPdfDocument = () => {
    
    
    document.getElementById("logo-name").style.visibility="visible";
    document.getElementById("logo-name").style.marginBottom="15px";
    
    const input = document.getElementById("preview-details");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", -15, -10, 240,height);

      pdf.save("download.pdf");
    });
    
    document.getElementById("logo-name").style.visibility="hidden";
    document.getElementById("logo-name").style.marginBottom="0px";
  };

  useEffect(() => {
    let myNav = document.getElementById("nav");
    myNav.classList.add("top-navbar-scroll");
    console.log("Inside nave bar keeping");
  }, []);

  window.onscroll = function () {
    let myNav = document.getElementById("nav");
    myNav.classList.add("top-navbar-scroll");
  };

  return (
    <div style={{ padding: "100px" }} id="preview-details">
        <div className="preview-college-name" id="logo-name">
         <img
              alt="logo"
              src="../images/logo.jpeg"
              className="navbar-logo-icon d-inline-block align-top circular-image "
            />{" "}
            <span className="heading-font navbar-logo-text">
              {" "}
              Thrive University Application Details
            </span>
            
            </div>
      <div className="personal-details-info">
        <div className="heading-font preview-header">Personal Details</div>
        <div className="personal-preview-flex-div">
          <div>
            <CommonPreviewLabelValue
              label="Full Name"
              value={props.formData.full_name}
            ></CommonPreviewLabelValue>
            <CommonPreviewLabelValue
              label="Mobile Number"
              value={props.formData.mobile_number}
            ></CommonPreviewLabelValue>
            <CommonPreviewLabelValue
              label="Father Name"
              value={props.formData.father_name}
            ></CommonPreviewLabelValue>
            <CommonPreviewLabelValue
              label="Level of Education"
              value={props.formData.level_of_education}
            ></CommonPreviewLabelValue>
            <CommonPreviewLabelValue
              label="Course"
              value={props.formData.course}
            ></CommonPreviewLabelValue>
          </div>
          <div>
            <CommonPreviewLabelValue
              label="Email"
              value={props.formData.email}
            ></CommonPreviewLabelValue>
            <CommonPreviewLabelValue
              label="Date of Birth"
              value={props.formData.date_of_birth}
            ></CommonPreviewLabelValue>
            <CommonPreviewLabelValue
              label="Mother Name"
              value={props.formData.mother_name}
            ></CommonPreviewLabelValue>
            <CommonPreviewLabelValue
              label="Department"
              value={props.formData.department}
            ></CommonPreviewLabelValue>
            <CommonPreviewLabelValue
              label="Address"
              value={props.formData.address}
            ></CommonPreviewLabelValue>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div className="study-details-info">
        <div className="heading-font preview-header">Educational Details</div>
        {props.formData.eduction.map((form, index) => {
          console.log("Education updated", props.openEducation, index);
          return (
            <div>
              <CommonPreviewLabelValue
                label="College Name"
                value={form.college_name}
              ></CommonPreviewLabelValue>
              <CommonPreviewLabelValue
                label="GPA"
                value={form.gpa}
              ></CommonPreviewLabelValue>
              <CommonPreviewLabelValue
                label="Level Of Education"
                value={form.level_of_education}
              ></CommonPreviewLabelValue>
               {form.file ? (
                <p className="img-preview-wrapper">
                  {<img src={form.file} alt="preview" />}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
      <Button color="warning" onClick={back}>
        Back
      </Button>

      <Button color="primary" onClick={continuePage}>
        Continue
      </Button>
    </div>
  );
};

export default PreviewDetails;
