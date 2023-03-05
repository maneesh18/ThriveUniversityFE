import React, { useState } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import FormStudyDetails from "./FormStudyDetails";

const Apply = (props) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    console.log("Next step clicked");
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  const [formData, setFormData] = useState({
    full_name: '',
    father_name: '',
    mother_name: '',
    mobile_number: '',
    date_of_birth: '',
    email:'',
    employment_status: null
  });

  switch (step) {
    case 1:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          formData={formData} setFormData={setFormData} 
        //   values={values}
        />
      );
    case 2:
      return (
        <FormStudyDetails
          nextStep={nextStep}
          prevStep={prevStep}
        //   values={values}
        />
      );
    // case 3:
    //   return (
    //     <Confirm
    //       nextStep={this.nextStep}
    //       prevStep={this.prevStep}
    //       values={values}
    //     />
    //   );
    // case 4:
    //   return <Success />;
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default Apply;
