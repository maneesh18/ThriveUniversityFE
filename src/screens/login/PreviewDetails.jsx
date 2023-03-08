import React, { useState } from "react";
import "./apply_styles.css";
import "./login_styles.css";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

const PreviewDetails = (props) => {
    const back = (e) => {
        e.preventDefault();
        props.prevStep();
      };
      const continuePage = (e) => {
        e.preventDefault();
        // props.nextStep();
        console.log("Education Form details",props.formData)
      };
    
  return (
    <div style={{padding:"100px"}}>
      
      <Button color="warning" onClick={back}>
          Back
        </Button>

        <Button color="primary" onClick={continuePage}>
          Continue
        </Button>
    </div>
  )
};

export default PreviewDetails;
