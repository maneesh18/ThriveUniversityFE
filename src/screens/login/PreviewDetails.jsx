import React, { useEffect, useState } from "react";
import "./apply_styles.css";
import "./login_styles.css";
import { Button } from "react-bootstrap";
import "./preview_details.css";
import CommonPreviewLabelValue from "./CommonPreviewLabelValue";
import html2canvas from "html2canvas";
import JsPDF from "jspdf";
import OverLayLoader from "./OverLayLoader";
import axios from "axios";
import { MOckLocalDomain } from "../../api_labels";
import ProgressStep from "./ProgressStep";

const PreviewDetails = (props) => {
  const [continueClicked, setContinueClicked] = useState(false);
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const continuePage = async (e) => {
    e.preventDefault();
    // props.nextStep();
   
    setContinueClicked(true);
    callFormSubmitAPi(fillFormData(props.formData));
    console.log("Education Form details", props.formData);
  };
  function fillFormData(formData){
    let forms = new FormData();
    forms.append("full_name",formData.full_name);
    forms.append("father_name",formData.father_name);
    forms.append("mother_name",formData.mother_name);
    forms.append("mobile_number",formData.mobile_number);
    forms.append("date_of_birth",formData.date_of_birth);
    forms.append("email",formData.email);
    forms.append("department",formData.department);
    forms.append("course",formData.course);
    forms.append("address",formData.address);
    forms.append("level_of_education",formData.level_of_education);
    var index=0;
    var educationForm=[];
    props.formData.education.forEach((data) => {
     let tempStudystatus =
      { college_name: data.college_name,
        gpa: data.gpa,
        file: getImgData(data.file, "-study-" + index),
        level_of_education: data.level_of_education,
      }
      educationForm.push(tempStudystatus);
      index=index+1;
    });
    index=0

    forms.append("education",educationForm)

    
    var WorkForm=[];
    props.formData.employment_status.forEach((data) => {
     let tempStudystatus =
      {
        company: data.company,
      start_date: data.start_date,
      description: data.description,
      end_date: data.end_date,
      designation: data.designation ,  
      }
      WorkForm.push(tempStudystatus);
      index=index+1;
    });
    index=0
    forms.append("employment_status",WorkForm)


    
    var tempExamstatus=[];
    props.formData.exam_details.forEach((data) => {
     let tempStudystatus =
      {
        
          exam_name: data.exam_name,
          score: data.score,
          additional_data: data.additional_data,
          upload_score: getImgData(data.upload_score, "-exam-" + index),
        
      }
      tempExamstatus.push(tempStudystatus);
      index=index+1;
    });
    index=0
    forms.append("exam_details",tempExamstatus)

    console.log("Form Data is ",forms);
    for (var pair of forms.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
    return forms;
  }
  const callFormSubmitAPi = (forms) => {
    console.log("Inside api integration")
    axios
      .post(MOckLocalDomain + "/apply", {
        form_data: forms,
      })
      .then((json) => {
        console.log("Api result", json.data);
        props.setApiResult(json.data);
        props.nextStep();
      })
      .catch((err) => console.log("Err", err));
  };
  const downloadPdfDocument = () => {
    document.getElementById("logo-name").style.visibility = "visible";
    document.getElementById("logo-name").style.marginBottom = "15px";

    const input = document.getElementById("preview-details");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new JsPDF();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 10, -10, 200, height);

      pdf.save("download.pdf");
    });

    document.getElementById("logo-name").style.visibility = "hidden";
    document.getElementById("logo-name").style.marginBottom = "0px";
  };

  const download = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      // setTimeout(() => {
      //     setLoader(true);
      // }, 100);
      const divToPrint = document.getElementById("preview-details");
      html2canvas(divToPrint).then((canvas) => {
        const imgData = canvas.toDataURL("image/png", 0.1);
        const imgWidth = 190;
        const pageHeight = 290;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        const doc = new JsPDF("pt", "mm");
        let position = 0;
        doc.addImage(imgData, "PNG", 10, 0, imgWidth, imgHeight + 25);
        heightLeft -= pageHeight;
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight + 25);
          heightLeft -= pageHeight;
        }
        doc.save("download.pdf");
        // setLoader(false);
      });
    }, 1000);
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

  async function getImgData(files, index) {
    // const imgPreview = document.getElementById("img-preview");
    // const files = chooseFile.files[0];
    console.log("Inside here", files);
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      let file;
      await fileReader.addEventListener("load", async function () {
        console.log("Inside on load", this.result);
        // imgPreview.style.display = "block";
        // imgPreview.width = "90%";
        file = this.result;
        document.getElementById("img-preview" + index).src = this.result;
        // imgPreview.innerHTML = '<img width="90%" src="' + this.result + '" />';
      });
      console.log("Result  byte data", file);
      return file;
    }
  }

  return (
    <div id="preview-details">
      <ProgressStep step={props.step}></ProgressStep>
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
        {props.formData.education.map((form, index) => {
          console.log("Education updated", props.openEducation, index);
          return (
            <div>
              <div className="preview-subheader">Educational {index + 1}</div>
              <div className="personal-preview-flex-div">
                <div>
                  <CommonPreviewLabelValue
                    label="College Name"
                    value={form.college_name}
                  ></CommonPreviewLabelValue>
                  <CommonPreviewLabelValue
                    label="GPA"
                    value={form.gpa}
                  ></CommonPreviewLabelValue>
                </div>
                <div>
                  <CommonPreviewLabelValue
                    label="Level Of Education"
                    value={form.level_of_education}
                  ></CommonPreviewLabelValue>
                </div>
              </div>

              {form.file ? (
                <div style={{ width: "80%" }}>
                  <img
                    style={{ objectFit: "contain", width: "100%" }}
                    id={"img-preview-study-" + index}
                    src={getImgData(form.file, "-study-" + index)}
                    alt="preview"
                  />
                </div>
              ) : // </p>
              null}
            </div>
          );
        })}
      </div>

      <br></br>
      <hr></hr>
      <div className="work-details-info">
        <div className="heading-font preview-header">
          Work Experience Details
        </div>
        {props.formData.employment_status.map((form, index) => {
          console.log("Education updated", props.openEducation, index);
          return (
            <div>
              <div className="preview-subheader">
                Work Experience {index + 1}
              </div>

              <div className="personal-preview-flex-div">
                <div>
                  <CommonPreviewLabelValue
                    label="Employer Name"
                    value={form.company}
                  ></CommonPreviewLabelValue>
                  <CommonPreviewLabelValue
                    label="Start Date"
                    value={form.start_date}
                  ></CommonPreviewLabelValue>
                </div>
                <div>
                  <CommonPreviewLabelValue
                    label="Designation"
                    value={form.designation}
                  ></CommonPreviewLabelValue>

                  <CommonPreviewLabelValue
                    label="End Date"
                    value={form.end_date}
                  ></CommonPreviewLabelValue>
                </div>
              </div>
              <CommonPreviewLabelValue
                label="Descirption"
                value={form.description}
              ></CommonPreviewLabelValue>
            </div>
          );
        })}
      </div>

      <br></br>
      <hr></hr>
      <div className="exam-details-info">
        <div className="heading-font preview-header">Exam Details</div>
        {props.formData.exam_details.map((form, index) => {
          console.log("Education updated", props.openEducation, index);
          return (
            <div>
              <div className="preview-subheader">Educational {index + 1}</div>
              <div className="personal-preview-flex-div">
                <div>
                  <CommonPreviewLabelValue
                    label="Exam Name"
                    value={form.exam_name}
                  ></CommonPreviewLabelValue>
                  <CommonPreviewLabelValue
                    label="Score"
                    value={form.score}
                  ></CommonPreviewLabelValue>
                </div>
                <div>
                  <CommonPreviewLabelValue
                    label="Additional Data"
                    value={form.additional_data}
                  ></CommonPreviewLabelValue>
                </div>
              </div>

              {form.upload_score ? (
                <div style={{ width: "80%" }}>
                  <img
                    style={{ objectFit: "contain", width: "100%" }}
                    id={"img-preview-exam-" + index}
                    src={getImgData(form.upload_score, "-exam-" + index)}
                    alt="preview"
                  />
                </div>
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

      <OverLayLoader active={continueClicked}></OverLayLoader>
    </div>
  );
};

export default PreviewDetails;
