import React, { useEffect } from "react";
import "./apply_styles.css";
import "./login_styles.css";

import ApplicationBottom from "./ApplicationBottom";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

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
  const handleOnContinue=()=>{
    props.setFormData({
      ...props.formData,
      employment_status: props.workExpformFields,
      eduction:props.formFields
    });
  }
  useEffect(()=>{
    console.log("Inside Study Details Use effect",props.formData)
  },[])
  return (
      <div className="study_details-content">
        <div className="study_details_wrapper">
        
        <div className="heading-font wrapper-1 prof-wrapper-1">
          PROFESSIONAL<div> DETAILS</div>
        </div>

        <div className="details-parent-div">
          <div className="study-details-education-div" >
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
                    <div className="side-heading" style={{fontSize:"20px"}}>
                      Education {index+1}
                    </div>
                    <div className="single-content-vertical-div">
                      <div >
                        <div className="input-element-div">
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
                        <div className="input-element-div">
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

                      <div >
                        <div className="input-element-div">
                          <label style={{ marginBottom: "10px" }}>
                            Upload Memo
                          </label>
                          <input
                            name="file"
                            placeholder="Upload"
                            onChange={(event) => props.handleFormChange(event, index)}
                            value=""
                            className="form-control"
                            type="file"
                          />
                        </div>
                        <div className="input-element-div">
                          <label style={{ marginBottom: "10px" }}>
                            Level of Education
                          </label>
                            <select
                              onChange={(event) =>
                                props.handleFormChange(event, index)
                              }
                              name="level_of_education"
                              className="form-control"
                            >
                              <option>{form.level_of_education != "" ? form.level_of_education : "Choose.."}</option>
                              <option>Algorithm</option>
                              <option>Language</option>
                              <option>Data Structure</option>
                            </select>
                          
                        </div>
                      </div>
                    </div>
                    <div style={{ }} className="delete-button"onClick={() => props.removeFields(index)}>
                    <div style={{fontSize:"18px"}}> Delete</div> <MdOutlineDelete
                        size="1.5em"
                        
                        style={{  }}
                      />
                    </div>
                  </div>
                ) : (
                  //   <Button color="primary" onClick={()=> setOpenEducation(index+1)}>
                  //   Education{index+1}
                  // </Button>
                  <div
                    className="side-heading header-div "
                  
                  >
                    <div className="details-wrapper-1"   onClick={() => props.setOpenEducation(index + 1)}>
                      Education {index + 1}
                    </div>
                    <div className="delete-icon-div"   onClick={() =>  props.removeFields(index)}>
                    <MdOutlineDelete
                        size="1.5em"
                        onClick={() => props.removeFields(index)}
                        style={{  }}
                      />
                      </div>
                    
                  </div>
                );
              })}
            </form>
          </div>

          <div className="work-details-education-div" >
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
                    <div className="side-heading" style={{fontSize:"20px"}}>
                      Work Experience {index+1}
                    </div>
                      <div className="single-content-vertical-div">
                        <div >
                        <div  className="input-element-div">
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
                         
                        <div  className="input-element-div">
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
                            </div>
                            <div>
                        <div  className="input-element-div">
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
                        
                        <div className="input-element-div">
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
                      <div style={{width:"93%",marginLeft:"20px",marginBottom:"20px"}}>
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
                     
                     
                    </div>
                    <div style={{ }} className="delete-button"onClick={() => props.removeWorkFields(index)}>
                    <div style={{fontSize:"18px"}}> Delete</div> <MdOutlineDelete
                        size="1.5em"
                        
                        style={{  }}
                      />
                    </div>
                  </div>
                ) : (
                 
                  <div
                  className="side-heading header-div "
                
                >
                  <div className="details-wrapper-1"   onClick={() => props.setOpenWork(index + 1)}>
                    Work Experience {index + 1}
                  </div>
                  <div className="delete-icon-div"   onClick={() =>  props.removeWorkFields(index)}>
                  <MdOutlineDelete
                      size="1.5em"
                      onClick={() => props.removeFields(index)}
                      style={{  }}
                    />
                    </div>
                  
                </div>
                );
              })}
            </form>
          </div>
        </div>
        
        </div>
      
        <ApplicationBottom nextStep={props.nextStep} prevStep={props.prevStep} onContinue={handleOnContinue} formData={props.formData} />
      </div>
  );
};

export default FormStudyDetails;
