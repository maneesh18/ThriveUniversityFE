import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerSelector(props) {
  const handleChange = date => props.SetDate(date);
  const CustomInput = ({ value, onClick }) => (
    <div className="mb-3">
          <label style={{marginBottom:"10px"}}>Email address</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter email"
            required="true"
          />
          </div>
  );

  return <DatePicker selected={props.Date}  customInput={<CustomInput />} onChange={handleChange} />;
}
