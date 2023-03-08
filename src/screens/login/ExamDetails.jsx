import React, { useEffect, useState } from "react";

import "./apply_styles.css";
import "./login_styles.css";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

import { MdOutlineDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineDown } from "react-icons/ai";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const ExamDetails = (props) => {
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
    <div id="exam-details">
      <div className="login-background-img">
        <img
          className="login-bgimage-img"
          src="https://media.istockphoto.com/id/1012049016/photo/young-man-writing-college-or-university-application-form-with-pen-and-paper-student-applying.jpg?s=612x612&w=is&k=20&c=0ucIgjGmrBOgxsooJ7ms5xtTK14OpITO3U_Fzf6VRNA="
          alt="home"
        />
      </div>

      <div className="study_details-content">
        <div className="study-details-education-div" style={{ width: "50%" }}>
          <div className="details-header-div" onClick={props.addScoreFields}>
            <p>
              <AiOutlinePlus
                size="1.5em"
                style={{ position: "relative", bottom: "2px" }}
              />{" "}
              Add Education Experience
            </p>
          </div>

          <form onSubmit={props.submit} className="study-details-form">
            {props.scoreformFields.map((form, index) => {
              console.log("Education updated", props.openScore, index);
              return index + 1 == props.openScore ? (
                <div key={index + 1} className="single-content-parent-div">
                  <div className="single-content-vertical-div">
                    <div style={{ width: "45%" }}>
                      <div style={{ marginBottom: "10px" }}>
                        <label style={{ marginBottom: "10px" }}>Score</label>
                        <input
                          name="score"
                          placeholder="Score.."
                          onChange={(event) =>
                            props.handleScoreFormChange(event, index)
                          }
                          value={form.score}
                          className="form-control"
                        />
                      </div>
                      <div>
                        <label style={{ marginBottom: "10px" }}>
                          Additional Data
                        </label>
                        <input
                          name="additional_data"
                          placeholder="addtional info"
                          onChange={(event) =>
                            props.handleScoreFormChange(event, index)
                          }
                          value={form.additional_data}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div style={{ width: "45%" }}>
                      <div style={{ marginBottom: "10px" }}>
                        <label style={{ marginBottom: "10px" }}>
                          Upload Score
                        </label>
                        <input
                          name="file"
                          placeholder="Upload"
                        //   onChange={(event) => {
                        //     changeHandler();
                        //     props.handleScoreFormChange(event, index);
                        //   }}
                          type="file"
                          id="image"
                          accept=".png, .jpg, .jpeg"
                          onChange={changeHandler}
                          value={form.upload_score}
                          className="form-control"
                        />
                      </div>
                      <div>
                        <label style={{ marginBottom: "10px" }}>
                          Exam Name
                        </label>
                        <div>
                          <select
                            style={{
                              width: "100%",
                              height: "40px",
                              borderRadius: "8px",
                              paddingLeft: "10px",
                            }}
                            onChange={(event) =>
                              props.handleScoreFormChange(event, index)
                            }
                            name="exam_name"
                          >
                            <option>Choose...</option>
                            <option>GRE</option>
                            <option>IELTS</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <MdOutlineDelete
                      size="2em"
                      onClick={() => props.removeScoreFields(index)}
                      style={{ margin: "0px auto", cursor: "pointer" }}
                    />
                  </div>
                </div>
              ) : (
                //   <Button color="primary" onClick={()=> setOpenEducation(index+1)}>
                //   Education{index+1}
                // </Button>
                <div
                  className="details-header-div"
                  onClick={() => props.setOpenScore(index + 1)}
                >
                  <p>
                    Education {index + 1}
                    <AiOutlineDown
                      size="0.9em"
                      style={{ position: "relative", bottom: "2px" }}
                    />{" "}
                  </p>
                </div>
              );
            })}
          </form>
        </div>
        {fileDataURL ? (
          <p className="img-preview-wrapper">
            {<img src={fileDataURL} alt="preview" />}
          </p>
        ) : null}
        <Button color="warning" onClick={back}>
          Back
        </Button>

        <Button color="primary" onClick={continuePage}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ExamDetails;
