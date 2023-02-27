import React from "react";
import "./aboutStyles.css";
import GridContent from "../../components/GridContent";
import HeadComponent from "../../components/HeadComponent";
import { ABOUT_PARAGARAPH_TEXT, ABOUT_HEADING_TEXT } from "../../Constants";
import {
  ABOUT_IMAGE2,
  ABOUT_CONTENT2,
  ABOUT_CONTENT1,
  ABOUT_IMAGE1,
} from "../../Constants";
import AboutStats from "../../components/AboutStats";

import { BiFootball, BiJoystick } from "react-icons/bi";
import { FaChess, FaSwimmer } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { ImMusic } from "react-icons/im";
import { RiImageEditFill } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";
import SideHeading from "../../components/SideHeading";

export default function About() {
  const iconsList = [
    { icon: <BiFootball className="about-fun-icon" />, description: "Outdoor Sports" },
    { icon: <FaChess className="about-fun-icon" />, description: "Indoor Sports" },
    { icon: <BiJoystick className="about-fun-icon" />, description: "Video Games" },
    { icon: <FaSwimmer className="about-fun-icon" />, description: "Swimming" },
    { icon: <IoIosPeople className="about-fun-icon" />, description: "Clubs" },
    { icon: <IoFitness className="about-fun-icon" />, description: "Fitness Centers" },
    { icon: <ImMusic className="about-fun-icon" />, description: "Perfomances" },
    { icon: <RiImageEditFill className="about-fun-icon" />, description: "Art Galleries" },
    { icon: <GiArchiveResearch className="about-fun-icon" />, description: "Research" },
  ];

  return (
    <div className="screen about">
      <HeadComponent
        imageSrc="https://www.georgetown.edu/wp-content/uploads/2019/09/20190518_Commencement_College-0181-2000x750-c-default.jpg"
        paragraphText={ABOUT_PARAGARAPH_TEXT}
        headingText={ABOUT_HEADING_TEXT}
        displayButton={false}
        buttonName=""
      />
      <div className="about-content">
        <GridContent
          class="grid-content-div"
          image={ABOUT_IMAGE1}
          headingText="PATH TO SUCCESS"
          text={ABOUT_CONTENT1}
        />
        <GridContent
          class="grid-content-reverse-div grid-content-div"
          image={ABOUT_IMAGE2}
          headingText="BEYOND THE CLASSROOM"
          text={ABOUT_CONTENT2}
        />
      </div>
      <SideHeading>
        More Than Just a University
      </SideHeading>
      <div className="about-stats">
        <AboutStats class="stat-div" heading="14,000" description="Students" />
        <AboutStats
          class="stat-div"
          heading="26%"
          description="International Students"
        />
        <AboutStats
          class="stat-div"
          heading="17:1"
          description="Student-Faculty Ratio"
        />
        <AboutStats
          class="stat-div"
          heading="450"
          description="Full-Time Faculty"
        />
      </div>
      <SideHeading>
        Thrive Outside the Box
      </SideHeading>
      <div className="about-funs">
        {iconsList.map((item) => {
          return (
            <div className="fun-div">
              {item.icon}
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
