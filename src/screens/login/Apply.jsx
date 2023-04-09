import React, { useState, useEffect } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import FormStudyDetails from "./FormStudyDetails";
import ExamDetails from "./ExamDetails";
import PreviewDetails from "./PreviewDetails";
import ApplicationDetails from "./ApplicationDetails";
import Sucess from "./Sucess";
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
    level_of_education: "",
    employment_status: null,
    education: null,
    exam_details: null,
  });

  const [personalFormDataValidation, setPersonalFormData] = useState({
    full_name: true,
    father_name: true,
    mother_name: true,
    mobile_number: true,
    date_of_birth: true,
    email: true,
    department: true,
    course: true,
    address: true,
    level_of_education: true,
  });

  const [departmentIndex, setDepartmentIndex] = useState(-1);

  const [formFields, setFormFields] = useState([
    { college_name: "", gpa: "", file: null, level_of_education: "" },
  ]);
  const [studyFormFieldsValidation, setStudyFormFieldsValidation] = useState([
    { college_name: true,
      gpa: true,
      file: true,
      level_of_education: true,
    }
  ]);

  const [workExpformFields, setWorkExpFormFields] = useState([
    {
      company: "",
      start_date: "",
      description: "",
      end_date: "",
      designation: "",
    },
  ]);

  const [workExpformFieldsValidation, setWorkExpFormFieldsValidation] =
    useState([
      {
        company: true,
        start_date: true,
        description: true,
        end_date: true,
        designation: true,
      },
    ]);

  const handleFormChange = (event, index, TID) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
    console.log("Inside handle form change", event.target.name);
  };
  const handleFormFileUploads = (event, index) => {
    let data = [...formFields];
    console.log("Inside");
    data[index][event.target.name] = event.target.files[0];
    setFormFields(data);
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

    let validationObject = {
      college_name: true,
      gpa: true,
      file: true,
      level_of_education: true,
    };
    setStudyFormFieldsValidation([
      ...studyFormFieldsValidation,
      validationObject,
    ]);

    setOpenEducation(openEducation + 1);
    console.log("Education opened", openEducation);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);

    let validateObject = [...studyFormFieldsValidation];
    validateObject.splice(index, 1);

    setStudyFormFieldsValidation(validateObject);

    setOpenEducation(openEducation - 1);
    console.log("Education opened after delete clicked", openEducation);
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
      designation: "",
    };

    setWorkExpFormFields([...workExpformFields, object]);

    let validationObject = {
      company: true,
      start_date: true,
      description: true,
      end_date: true,
      designation: true,
    };

    setWorkExpFormFieldsValidation([
      ...workExpformFieldsValidation,
      validationObject,
    ]);

    setOpenWork(openWork + 1);
  };

  const removeWorkFields = (index) => {
    let data = [...workExpformFields];
    data.splice(index, 1);
    setWorkExpFormFields(data);

    let validateObject = [...workExpformFieldsValidation];
    validateObject.splice(index, 1);

    setWorkExpFormFieldsValidation(validateObject);

    setOpenWork(openWork - 1);
  };

  const [openEducation, setOpenEducation] = useState(1);
  const [openWork, setOpenWork] = useState(1);

  //end the work details screen state management

  const [scoreformFields, setScoreFormFields] = useState([
    {
      exam_name: "",
      score: "",
      additional_data: "",
      upload_score: null,
    },
  ]);
  const [scoreformFieldsValidation, setScoreFormFieldsValidation] = useState([
    {
      exam_name: true,
      score: true,
      additional_data: true,
      upload_score: true,
    },
  ]);
  const removeScoreFields = (index) => {
    let data = [...scoreformFields];
    data.splice(index, 1);
    setScoreFormFields(data);
    let validateObject = [...scoreformFieldsValidation];
    validateObject.splice(index, 1);

    setScoreFormFieldsValidation(validateObject);

    setOpenScore(openScore - 1);
  };

  const handleScoreFormChange = (event, index) => {
    let data = [...scoreformFields];
    data[index][event.target.name] = event.target.value;
    setScoreFormFields(data);
    console.log("Hello123");
  };

  const handleScoreFormFileUploads = (event, index) => {
    let data = [...scoreformFields];
    console.log("Inside");
    data[index][event.target.name] = event.target.files[0];
    setScoreFormFields(data);
  };
  const addScoreFields = () => {
    let object = {
      exam_name: "",
      score: "",
      additional_data: "",
      upload_score: "",
    };
    
    setScoreFormFields([...scoreformFields, object]);

    let validationObject = {
      exam_name: true,
      score: true,
      additional_data: true,
      upload_score: true,
    };
    setScoreFormFieldsValidation([
      ...scoreformFieldsValidation,
      validationObject,
    ]);

    setOpenScore(openScore + 1);
  };

  const [openScore, setOpenScore] = useState(1);

  useEffect(() => {
    console.log("Do something after counter has changed", formData);
  }, [formData]);

  const [apiResult, setApiResult] = useState([
    {
      message: "",
      tracking_id: "",
    },
  ]);

  useEffect(() => {
    console.log("Do something after form  has submitted", apiResult);
  }, [apiResult]);

  function renderUi(step) {
    switch (step) {
      case 0:
        return (
          <ApplicationDetails
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 1:
        return (
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            setFormData={setFormData}
            departmentIndex={departmentIndex}
            setDepartmentIndex={setDepartmentIndex}
            step={step}
            personalFormDataValidation={personalFormDataValidation}
            setPersonalFormData={setPersonalFormData}
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
            handleFormFileUploads={handleFormFileUploads}
            step={step}
            studyFormFieldsValidation={studyFormFieldsValidation}
            setStudyFormFieldsValidation={setStudyFormFieldsValidation}
            workExpformFieldsValidation={workExpformFieldsValidation}
            setWorkExpFormFieldsValidation={setWorkExpFormFieldsValidation}
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
            handleScoreFormFileUploads={handleScoreFormFileUploads}
            step={step}
            scoreformFieldsValidation={scoreformFieldsValidation}
            setScoreFormFieldsValidation={setScoreFormFieldsValidation}
          />
        );
      case 4:
        return (
          <PreviewDetails
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            setApiResult={setApiResult}
            step={step}
          />
        );
      case 5:
        return <Sucess apiResult={apiResult}></Sucess>;
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
  return <div>{renderUi(step)}</div>;
};
export default Apply;
