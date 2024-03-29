import React from "react";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./application_details.css";
const ApplicationBottom = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const continuePage = async (e) => {
    console.log("Clicked the continue button");
    e.preventDefault();
    await props.onContinue();
    console.log("FORM DAta is ", props.formData);
    props.nextStep();
  };
  return (
    <div>
      <div className="bottom-layout">
        <button type="submit" id="prev" onClick={back}>
          <AiOutlineArrowLeft size="1em" />
          <span style={{ paddingLeft: "5px" }}>Back</span>
        </button>
        <button type="button" id="continue" onClick={continuePage} disabled={props.disableContinueButton}>
          <span style={{ paddingRight: "5px" }}>Continue</span>{" "}
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ApplicationBottom;
