import React from "react"
import './preview_details.css';
const CommonPreviewLabelValue = (props) => {
  return (
      <div className="personal-details-body">
            <div className="personal-details-label">
                {props.label}
            </div>
            <input value={props.value} className="form-control personal-details-value" readonly disabled></input>
        </div>
  )
};

export default CommonPreviewLabelValue;
