import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {  useNavigate } from "react-router-dom";

function AcademicBoxContent(props) {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/info?context="+props.id);
  }
  return (
    <div className='box-content'>
        <div className="box-image">
            <img src={props.image} alt="university offerings" />
        </div>
        <div className="box-text">
            <h2>{props.context}</h2>
            <BsFillArrowRightCircleFill className='icon' onClick={handleLoginClick}/>
        </div>
    </div>
  )
}

export default AcademicBoxContent