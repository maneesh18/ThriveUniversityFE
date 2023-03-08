import React, { useState } from "react";
import "./apply_styles.css";
import "./login_styles.css";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

import { MdOutlineDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineDown } from "react-icons/ai";

const FormStudyDetails = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const continuePage = (e) => {
    e.preventDefault();
    props.setFormData({
      ...props.formData,
      employment_status: props.workExpformFields,
      eduction:props.formFields
    });
    props.nextStep();
    console.log("Education Form details", props.formData);
  };
  return (
    <div>
      <div className="login-background-img">
        <img
          className="login-bgimage-img"
          src="https://media.istockphoto.com/id/1012049016/photo/young-man-writing-college-or-university-application-form-with-pen-and-paper-student-applying.jpg?s=612x612&w=is&k=20&c=0ucIgjGmrBOgxsooJ7ms5xtTK14OpITO3U_Fzf6VRNA="
          alt="home"
        />
      </div>
      <div className="study_details-content">
        <div className="details-parent-div">
          <div className="study-details-education-div" style={{ width: "50%" }}>
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
                    <div className="single-content-vertical-div">
                      <div style={{ width: "45%" }}>
                        <div style={{ marginBottom: "10px" }}>
                          <label style={{ marginBottom: "10px" }}>
                            College/School Name
                          </label>
                          <input
                            name="college_name"
                            placeholder="College Name"
                            onChange={(event) => props.handleFormChange(event, index)}
                            value={form.college_name}
                            className="form-control"
                          />
                        </div>
                        <div>
                          <label style={{ marginBottom: "10px" }}>
                            GPA/Percentage
                          </label>
                          <input
                            name="gpa"
                            placeholder="Result"
                            onChange={(event) => props.handleFormChange(event, index)}
                            value={form.gpa}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div style={{ width: "45%" }}>
                        <div style={{ marginBottom: "10px" }}>
                          <label style={{ marginBottom: "10px" }}>
                            Upload Memo
                          </label>
                          <input
                            name="file"
                            placeholder="Upload"
                            onChange={(event) => props.handleFormChange(event, index)}
                            value={form.file}
                            className="form-control"
                            type="file"
                          />
                        </div>
                        <div>
                          <label style={{ marginBottom: "10px" }}>
                            Level of Education
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
                                props.handleFormChange(event, index)
                              }
                              name="level_of_education"
                            >
                              <option>Choose...</option>
                              <option>Algorithm</option>
                              <option>Language</option>
                              <option>Data Structure</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <MdOutlineDelete
                        size="2em"
                        onClick={() => props.removeFields(index)}
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
                    onClick={() => props.setOpenEducation(index + 1)}
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

          <div className="work-details-education-div" style={{ width: "50%" }}>
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
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ width: "45%" }}>
                          <label style={{ marginBottom: "10px" }}>
                            Company Name
                          </label>
                          <input
                            name="company"
                            placeholder="Company Name"
                            onChange={(event) =>
                              props.handleWorkFormChange(event, index)
                            }
                            value={form.company}
                            className="form-control"
                          />
                        </div>
                        <div style={{ width: "45%", marginBottom: "10px" }}>
                          <label style={{ marginBottom: "10px" }}>
                            Designation
                          </label>
                          <input
                            name="designation"
                            placeholder="Role"
                            onChange={(event) =>
                              props.handleWorkFormChange(event, index)
                            }
                            value={form.designation}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div style={{ marginBottom: "10px" }}>
                        <label style={{ marginBottom: "10px" }}>
                          Office Location
                        </label>
                        <input
                          name="location"
                          onChange={(event) =>
                            props.handleWorkFormChange(event, index)
                          }
                          value={form.location}
                          placeholder="location..."
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        <label style={{ marginBottom: "10px" }}>
                          Description
                        </label>
                        <textarea
                          name="description"
                          onChange={(event) =>
                            props.handleWorkFormChange(event, index)
                          }
                          value={form.description}
                          placeholder="write awayy..."
                          className="form-control"
                          rows="2"
                          cols="60"
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ width: "45%" }}>
                          <label style={{ marginBottom: "10px" }}>From *</label>
                          <input
                            name="start_date"
                            placeholder="pick a date"
                            onChange={(event) =>
                              props.handleWorkFormChange(event, index)
                            }
                            value={form.start_date}
                            className="form-control"
                            required="true"
                            type="date"
                          />
                        </div>
                        <div style={{ width: "45%" }}>
                          <label style={{ marginBottom: "10px" }}>To *</label>
                          <input
                            name="end_date"
                            placeholder="Pick a data"
                            onChange={(event) =>
                              props.handleWorkFormChange(event, index)
                            }
                            value={form.end_date}
                            className="form-control"
                            type="date"
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <MdOutlineDelete
                        size="2em"
                        onClick={() => props.removeWorkFields(index)}
                        style={{ margin: "0px auto", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className="details-header-div"
                    onClick={() => props.setOpenWork(index + 1)}
                  >
                    <p>
                      Work Experience {index + 1}
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
        </div>

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

export default FormStudyDetails;
