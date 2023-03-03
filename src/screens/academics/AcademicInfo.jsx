import React from "react";
import HeadComponent from "../../components/HeadComponent";
import DepartmentInfo from "./DepartmentInfo";
import { useSearchParams } from "react-router-dom";
import CoursesInfo from "./CoursesInfo";
import Paragraph from "../../components/Paragraph";

function AcademicInfo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("context");
  const componentDictonary = {
    "academic-departments": <DepartmentInfo />,
    "academic-courses": <CoursesInfo />,
    "academic-calendar": <h1>academic calender</h1>,
  };
  const bodyParagraphText =
    "The Thrive Graduate School promotes excellence in graduate education and contributes to a vibrant research environment at UNT. It oversees graduate program development and collaborates with departments on the recruitment, admission and enrollment services provided to the university's 6,700 graduate students.";
  const HeadingParagraphText =
    "The sky's the limit at Thrive University, where more than 44,000 students from around the world choose from 244 high-quality degree programs in 14 colleges and schools to pursue their dreams of becoming teachers, artists, engineers and everything in between.";
  return (
    <div className="about-info-screen">
      <HeadComponent
        imageSrc="https://www.shutterstock.com/image-photo/radcliffe-quadrangle-the-quad-harvard-260nw-396023383.jpg"
        paragraphText={HeadingParagraphText}
        headingText="Thrives's Colleges and Schools"
        displayButton={true}
        buttonName="Goto Departments"
        clickHandler={() => window.location.replace("#department-section")}
      />
      <h1
        className="side-heading"
        style={{ textAlign: "center", margin: "20px" }}
      >
        Thrive Graduate School
      </h1>
      <Paragraph>{bodyParagraphText}</Paragraph>
      <section id="department-section">{componentDictonary[id]}</section>
    </div>
  );
}

export default AcademicInfo;
