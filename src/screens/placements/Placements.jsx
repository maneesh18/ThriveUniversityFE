import React from "react";
import HeadComponent from "../../components/HeadComponent";
import "./placementStyles.css";
import {
  PLACEMENT_PARAGRAPH_TEXT,
  PLACEMENT_HEADING_TEXT,
  RECRUITER_SPEAK_LIST,
} from "../../Constants";
import Paragraph from "../../components/Paragraph";
import SideHeading from "../../components/SideHeading";
import AboutStats from "../../components/AboutStats";
import RecruiterText from "./RecruiterText";
import PlacementSlider from "./PlacementSlider";

export default function Placements() {
  const bodyParagraphText =
    "The College has a Centre for Student Services and Placement, which gives personal and career counseling to the students. The idea is to enable students to effectively cope with life at College as well as in their career. One of the major objectives of the centre is to help students in obtaining internships and placements in reputed companies across various industrial sectors. Assistance is also provided to students in procuring higher education opportunities. The College offers special coaching for GATE, TOEFL, and GRE to its students. They are also encouraged to present technical papers at seminars in other colleges with a view to improving their research and presentation skills. Also, during the last few years, several personality development programs have been conducted by experts from industry.";

  return (
    <div className="screen placement">
      <HeadComponent
        imageSrc="https://www.jainuniversity.ac.in/uploads/blog/db2b1c69fc63b1eb89a6ad774b1b8cb0.jpg"
        paragraphText={PLACEMENT_PARAGRAPH_TEXT}
        headingText={PLACEMENT_HEADING_TEXT}
        displayButton={false}
        buttonName="Apply Now"
      />
      <Paragraph>{bodyParagraphText}</Paragraph>
      <div className="placement-office">
        <p className="placement-office-info">
          <b>Mr. Sergio Marquina</b>,<br /> Associate Dean - Campus & Corporate
          Relations <br /> Mobile number - +91 9232xxr494 <br /> Land line
          number - 08414 xxx 663 <br /> Email id - placement@thrive.ac.in,
          placement.thrive@gmail.com
        </p>
        <img
          src="https://static.wikia.nocookie.net/villains/images/0/0b/Professor-Money-Heist-Wallpapers-16.jpg"
          alt="professor"
        />
      </div>
      <SideHeading>Placements at a Glance</SideHeading>
      <div className="about-stats">
        <AboutStats
          class="stat-div"
          heading="100%"
          description="Placement Record from 16 years"
        />
        <AboutStats
          class="stat-div"
          heading="500"
          description="Companies on Campus"
        />
        <AboutStats
          class="stat-div"
          heading="60 CTC"
          description="Highest Package Offered"
        />
        <AboutStats
          class="stat-div"
          heading="4-5 LPA"
          description="Minimum Offered"
        />
      </div>
      <div className="placement-recruiter">
        <img
          className="placement-recruiter-image"
          src="https://ocs.iith.ac.in/static/media/About-IITH.955c2f55.jpg"
          alt="placement-recruiter-speak"
        />
        <div className="placement-recruiter-content">
        <SideHeading>Recruiters' Speak</SideHeading>
        <hr style={{borderTop:"3px solid white",color:"white",width:"50%",margin:"0px auto 30px"}}/>
        <div>
          {RECRUITER_SPEAK_LIST.map(({ text, recruiter }) => {
            return <RecruiterText text={text} recruiter={recruiter} />;
          })}
          </div>
        </div>
      </div>
      <PlacementSlider />
    </div>
  );
}
