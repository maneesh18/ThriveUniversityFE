import React from "react";
import { DEPARTMENT_LIST } from "./AcademicConstants";
import Department from "./Department";

function DepartmentInfo() {
  return (
    <div className="department-div">
      {DEPARTMENT_LIST.map(({ key, image, heading, body }) => {
        return (
          <Department key={key} image={image} heading={heading} body={body} id={key}/>
        );
      })}
    </div>
  );
}

export default DepartmentInfo;
