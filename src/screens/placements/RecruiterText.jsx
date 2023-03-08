import React from "react";
import Paragraph from "../../components/Paragraph";

function RecruiterText(props) {
  return (
    <div className="placement-recruiter-content-box">
      <Paragraph>{props.text}</Paragraph>
      <span>{"- "+props.recruiter}</span>
    </div>
  );
}

export default RecruiterText;
