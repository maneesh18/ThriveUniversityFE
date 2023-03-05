import React, { useState } from "react";
import "./apply_styles.css";
import "./login_styles.css";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

import {MdOutlineDelete } from "react-icons/md";
import {AiOutlinePlus} from "react-icons/ai";

const FormStudyDetails = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const continuePage = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const [formFields, setFormFields] = useState([{ college_name: "", gpa: "",fike:null,level_of_education:"" }]);
  const [workExpformFields, setWorkExpFormFields] = useState([{ company: "", start_date: "",description:"",end_date:"",location:"",designation:"" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
    console.log("Hello123");
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      college_name: "",
      gpa: "",
      file: null,
      level_of_education: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  const handleWorkFormChange = (event, index) => {
    let data = [...workExpformFields];
    data[index][event.target.name] = event.target.value;
    setWorkExpFormFields(data);
    console.log("Hello123");
  };


  const addWorkFields = () => {
    let object = {
      company: "", start_date: "",description:"",end_date:"",location:"",designation:""
    };

    setWorkExpFormFields([...workExpformFields, object]);
  };

  const removeWorkFields = (index) => {
    let data = [...workExpformFields];
    data.splice(index, 1);
    setWorkExpFormFields(data);
  };

  return (
    <div>
      <div className="login-background-img">
        <img
          className="bgimage-img"
          src="https://media.istockphoto.com/id/1012049016/photo/young-man-writing-college-or-university-application-form-with-pen-and-paper-student-applying.jpg?s=612x612&w=is&k=20&c=0ucIgjGmrBOgxsooJ7ms5xtTK14OpITO3U_Fzf6VRNA="
          alt="home"
        />
      </div>
      <div className="study_details-content">
        <div className="details-parent-div" style={{display:"flex",justifyContent:"space-between"}}>

        <div className="study-details-education-div" style={{width:"50%"}}>
          <div className="details-header-div" onClick={addFields}>
            <p>
              <AiOutlinePlus size="1.5em" style={{position:"relative",bottom:"2px"}}/>    Add Education
              Experience
            </p>
          </div>

          <form onSubmit={submit} className="study-details-form">
            {formFields.map((form, index) => {
              return (
                <div
                  key={index}
                  className="single-content-parent-div"
                >
                  <div
                    className="single-content-vertical-div"
                  >
                    <div style={{ width: "45%" }}>
                      <div style={{ marginBottom: "10px" }}>
                        <label style={{ marginBottom: "10px" }}>
                          College/School Name
                        </label>
                        <input
                          name="college_name"
                          placeholder="College Name"
                          onChange={(event) => handleFormChange(event, index)}
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
                          onChange={(event) => handleFormChange(event, index)}
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
                          onChange={(event) => handleFormChange(event, index)}
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
                            onChange={(event) => handleFormChange(event, index)}
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
                  <div style={{display:"flex"}}>
                  <MdOutlineDelete size="2em"onClick={() => removeFields(index)}  style={{margin:"0px auto",cursor:"pointer"}} />
                  </div>
                  
                </div>
              );
            })}
          </form>

        </div>

        <div className="work-details-education-div"style={{width:"50%",paddingLeft:"20px"}}>
          <div className="details-header-div" onClick={addWorkFields}>
            <p>
              <AiOutlinePlus size="1.5em" style={{position:"relative",bottom:"2px"}}/>    Add Work
              Experience
            </p>
          </div>

          <form onSubmit={submit} className="study-details-form" >
            {workExpformFields.map((form, index) => {
              return (
                <div
                  key={index}
                  className="single-content-parent-div"
                >
                  <div >
                    <div style={{ display:"flex",justifyContent:"space-between" }}>
                      <div style={{width:"45%"}} >
                        <label style={{ marginBottom: "10px" }}>
                          Company Name
                        </label>
                        <input
                          name="company"
                          placeholder="Company Name"
                          onChange={(event) => handleWorkFormChange(event, index)}
                          value={form.company}
                          className="form-control"
                        />
                      </div>
                      <div style={{width:"45%", marginBottom: "10px" }}>
                        <label style={{ marginBottom: "10px" }}>
                          Designation
                        </label>
                        <input
                          name="designation"
                          placeholder="Role"
                          onChange={(event) => handleWorkFormChange(event, index)}
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
                          onChange={(event) => handleWorkFormChange(event, index)}
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
                          onChange={(event) => handleWorkFormChange(event, index)}
                          value={form.description}
                          placeholder="write awayy..."
                          className="form-control"
                          rows = "2"
                           cols = "60"
                        />
                      </div>
                      <div style={{ display:"flex",justifyContent:"space-between" }}>
                      <div style={{width:"45%"}} >
                        <label style={{ marginBottom: "10px" }}>
                          From *
                        </label>
                        <input
                          name="start_date"
                          placeholder="pick a date"
                          onChange={(event) => handleWorkFormChange(event, index)}
                          value={form.start_date}
                          className="form-control"
                          required="true"
                          type="date"
                        />
                      </div>
                      <div style={{width:"45%"}}>
                        <label style={{ marginBottom: "10px" }}>
                          To *
                        </label>
                        <input
                          name="end_date"
                          placeholder="Pick a data"
                          onChange={(event) => handleWorkFormChange(event, index)}
                          value={form.end_date}
                          className="form-control"
                          type="date"
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{display:"flex"}}>
                  <MdOutlineDelete size="2em"onClick={() => removeWorkFields(index)}  style={{margin:"0px auto",cursor:"pointer"}} />
                  </div>
                  
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
