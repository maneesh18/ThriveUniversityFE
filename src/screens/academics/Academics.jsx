import React from "react";
import HeadComponent from "../../components/HeadComponent";
import "./academicStyles.css";
import {
  ACADEMIC_PARAGRAPH_TEXT,
  ACADEMIC_HEADING_TEXT,
} from "../../Constants";
import AcademicBoxContent from "./AcademicBoxContent";
import GridContent from "../../components/GridContent";
import {
  ACADEMIC_IMAGE1,
  ACADEMIC_CONTENT1,
  ACADEMIC_IMAGE2,
  ACADEMIC_CONTENT2,
  ACADEMIC_IMAGE3,
  ACADEMIC_CONTENT3
} from "../../Constants";
import SideHeading from "../../components/SideHeading";

export default function Academics() {

  return (
    <div className="screen academic">
      <HeadComponent
        imageSrc="https://studentsupportinitiative.northeastern.edu/wp-content/uploads/2021/11/bigstock-Happy-Diverse-Students-Walking-314470870-1.jpeg"
        paragraphText={ACADEMIC_PARAGRAPH_TEXT}
        headingText={ACADEMIC_HEADING_TEXT}
        displayButton={false}
        buttonName="Apply Now"
      />
      <SideHeading>
        Discover what Thrive University Offers
      </SideHeading>
      <div className="academic-box-content">
        <AcademicBoxContent
          key={1}
          id="academic-departments"
          image="https://www.webster.edu/images/grad-377x377.jpg"
          context="Departments"
        />
        <AcademicBoxContent
          key={2}
          id="academic-courses"
          image="https://teachingenglishgames.com/wp-content/uploads/2018/08/adapting-textbooks-L.jpg"
          context="Courses Offered"
        />
        <AcademicBoxContent
          key={3}
          id="academic-calendar"
          image="https://miu.edu.ng/wp-content/uploads/2021/11/acadamic.jpg"
          context="Academic Calendar"
        />
      </div>
      <hr className="hr-style"/>
      <h1
        className="heading-font"
        style={{ textAlign: "center", margin: "30px 20px 0px" }}
      >
        Experiential Learning
      </h1>
      <div className="academic-content">
        <GridContent
          class="grid-content-div"
          image={ACADEMIC_IMAGE1}
          headingText="Hands On Experience"
          text={ACADEMIC_CONTENT1}
        />
        <GridContent
          class="grid-content-reverse-div grid-content-div"
          image={ACADEMIC_IMAGE2}
          headingText="Undergraduate Research"
          text={ACADEMIC_CONTENT2}
        />
        <GridContent
          class="grid-content-div"
          image={ACADEMIC_IMAGE3}
          headingText="Build Your Skills in a Design Team"
          text={ACADEMIC_CONTENT3}
        />
      </div>
    </div>
  );
}
