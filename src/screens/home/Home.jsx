import React from "react";
import "./homeStyles.css";
import HeadComponent from "../../components/HeadComponent";
import { HOME_PARAGRAPH_TEXT, HOME_HEADING_TEXT } from "../../Constants";
import Slider from "./Slider";
import GridContent from "../../components/GridContent";
import {
  HOME_IMAGE1,
  HOME_CONTENT1,
  HOME_CONTENT2,
  HOME_IMAGE2,
} from "../../Constants";

export default function Home() {
  return (
    <div className="screen">
      <HeadComponent
        imageSrc = "https://marvel-b1-cdn.bc0a.com/f00000000047992/www.letu.edu/campaigns/images/background-images/busines-admin-management.jpg"
        paragraphText={HOME_PARAGRAPH_TEXT}
        headingText={HOME_HEADING_TEXT}
        displayButton={true}
        buttonName="Apply Now"
      />
      <Slider sliderList={["", "", "", "", "", ""]} />
      <p className="home-top-text">
        As one of the nation's largest universities, we offer
          112 bachelor's, 94 master's and 38 doctoral degree prograsm.
        By providing access, welcoming diversity and strengthening our
        collaborations with our many educational, business and community
        partners, as well as building new partnerships across the globe, UNT's
        faculty and staff work each day to prepare students for the challenges
        they will meet in our changing world.
      </p>
      <div className="home-content">
        <GridContent
          class="grid-content-div"
          image={HOME_IMAGE1}
          headingText="EXCELLENCE MEETS DIVERSITY"
          text={HOME_CONTENT1}
        />
        <GridContent
          class="grid-content-reverse-div grid-content-div"
          image={HOME_IMAGE2}
          headingText="UNLEASH YOUR POTENTIAL"
          text={HOME_CONTENT2}
        />
      </div>
    </div>
  );
}
