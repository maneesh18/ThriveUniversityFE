import React from "react";
import SideHeading from "../../components/SideHeading"

function Course(props) {
  const {courseName, description,seats,shortForm} = props.courseObj;
  return (
    <div className="course-div">
    <SideHeading>{courseName}</SideHeading>
        <div className="course-collapse-text">
          <p style={{fontStyle:"italic"}}>{description}</p>
          <br />
          <p style={{fontWeight:"bold"}}>Seats : {seats}</p>
        </div>
    </div>
  );
}

export default Course;
