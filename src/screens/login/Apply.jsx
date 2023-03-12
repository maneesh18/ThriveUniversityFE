import React, { useState,useEffect } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import FormStudyDetails from "./FormStudyDetails";
import ExamDetails from "./ExamDetails";
import PreviewDetails from "./PreviewDetails";
import ApplicationDetails from "./ApplicationDetails";
const Apply = (props) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    console.log("Next step clicked");
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  const [formData, setFormData] = useState({
    full_name: "",
    father_name: "",
    mother_name: "",
    mobile_number: "",
    date_of_birth: "",
    email: "",
    department: "",
    course: "",
    address: "",
    level_of_education:"",
    employment_status: null,
    education: null,
    exam_details:null,
  });


  const [departmentIndex, setDepartmentIndex] = useState(-1);

  const [formFields, setFormFields] = useState([
    { college_name: "", gpa: "", file: null, level_of_education: "" },
  ]);
  const [workExpformFields, setWorkExpFormFields] = useState([
    {
      company: "",
      start_date: "",
      description: "",
      end_date: "",
      location: "",
      designation: "",
    },
  ]);

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
    console.log("Education opened", openEducation);
    setOpenEducation(openEducation + 1);

    console.log("Education opened", openEducation);
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
      company: "",
      start_date: "",
      description: "",
      end_date: "",
      location: "",
      designation: "",
    };

    setWorkExpFormFields([...workExpformFields, object]);
    setOpenWork(openWork + 1);
  };

  const removeWorkFields = (index) => {
    let data = [...workExpformFields];
    data.splice(index, 1);
    setWorkExpFormFields(data);
  };

  const [openEducation, setOpenEducation] = useState(1);
  const [openWork, setOpenWork] = useState(1);

//end the work details screen state management


      
const [scoreformFields, setScoreFormFields] = useState([
  {
    exam_name: "",
    score: "",
    additional_data: "",
    upload_score: "",
  },
]);
    
const removeScoreFields = (index) => {
  let data = [...scoreformFields];
  data.splice(index, 1);
  setScoreFormFields(data);
};

const handleScoreFormChange = (event, index) => {
  let data = [...scoreformFields];
  data[index][event.target.name] = event.target.value;
  setScoreFormFields(data);
  console.log("Hello123");
};

const addScoreFields = () => {
  let object = {
      exam_name: "",
      score: "",
      additional_data: "",
      upload_score: "",
  };

  setScoreFormFields([...scoreformFields, object]);
  setOpenScore(openScore + 1);
};



const [openScore, setOpenScore] = useState(1);

useEffect(() => {
  console.log('Do something after counter has changed', formData);
}, [formData]);


  switch (step) {
    case 0:
      return(
        <ApplicationDetails 
        nextStep={nextStep}
        prevStep={prevStep}/>
        )
    case 1:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          departmentIndex={departmentIndex}
          setDepartmentIndex={setDepartmentIndex}
          //   values={values}
        />
      );
    case 2:
      return (
        <FormStudyDetails
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          formFields={formFields}
          setFormFields={setFormFields}
          workExpformFields={workExpformFields}
          setWorkExpFormFields={setWorkExpFormFields}
          handleFormChange={handleFormChange}
          addFields={addFields}
          removeFields={removeFields}
          handleWorkFormChange={handleWorkFormChange}
          addWorkFields={addWorkFields}
          removeWorkFields={removeWorkFields}
          openEducation={openEducation}
          setOpenEducation={setOpenEducation}
          openWork={openWork}
          setOpenWork={setOpenWork}
          submit={submit}
          //   values={values}
        />
      );
    case 3:
      return (
        <ExamDetails
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          scoreformFields={scoreformFields}
          setScoreFormFields={setScoreFormFields}
          removeScoreFields={removeScoreFields}
          addScoreFields={addScoreFields}
          handleScoreFormChange={handleScoreFormChange}
          openScore={openScore}
          setOpenScore={setOpenScore}
        />
      );
    case 4:
      return <PreviewDetails nextStep={nextStep} prevStep={prevStep} 
      formData={formData} />;
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default Apply;
