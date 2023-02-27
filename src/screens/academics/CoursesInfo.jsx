import React, { useReducer, useState } from "react";
import { COURSE_LIST } from "./AcademicConstants";
import Course from "./Course";

const departmentName = [
  "College of Engineering",
  "College of Science",
  "College of Health and Public Service",
  "College of Information",
  "College of Liberal Arts and Social Sciences",
];

function CoursesInfo() {
  const [subIndex, setSubIndex] = useState([0, 0, 0, 0, 0]);
  return (
    <div className="course-content">
      {departmentName.map((item, index) => {
        return (
          <div>
            <h1 className="heading-font" style={{ marginLeft: "10px" }}>
              {item}
            </h1>
            <div className="shortcut-div">
              {COURSE_LIST[index].map(({ shortForm, ...x }, i) => {
                return (
                  <div
                    id={shortForm}
                    className= { i=== 0 ? "shortcut-text highlited-shorctut-text" : "shortcut-text " }
                    onClick={() => {
                      setSubIndex((prev) => {
                        const newstate = prev.slice();
                        document
                          .getElementById(COURSE_LIST[index][prev[index]].shortForm)
                          .classList.remove("highlited-shorctut-text");
                        document
                          .getElementById(shortForm)
                          .classList.add("highlited-shorctut-text");
                        newstate[index] = i;
                        return newstate;
                      });
                    }}
                  >
                    {shortForm}
                  </div>
                );
              })}
            </div>
            <Course courseObj = {COURSE_LIST[index][subIndex[index]]}/>
          </div>
        );
      })}
    </div>
  );
}

export default CoursesInfo;
