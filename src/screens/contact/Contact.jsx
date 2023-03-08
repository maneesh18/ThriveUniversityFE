import React from "react";
import HeadComponent from "../../components/HeadComponent";
import "./contactStyles.css";
import { CONTACT_PARAGRAPH_TEXT, CONTACT_HEADING_TEXT } from "../../Constants";
import SideHeading from "../../components/SideHeading";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { MdMarkEmailRead, MdMenuBook } from "react-icons/md";
import MapContainer from "./MapContainer";
import FeedbackForm from "./FeedbackForm"

const iconStyle = { height: "30px", width: "30px", margin: "10px auto" };
export default function Contact() {
  return (
    <div className="screen contact">
      <HeadComponent
        imageSrc="https://media.istockphoto.com/id/1141639313/photo/contact-us-woman-hand-holding-icon-customer-support-concept-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=b72JkIvEEmhF2XQyyb6F3bjD-Qsf8BNC13egb7isk6M="
        paragraphText={CONTACT_PARAGRAPH_TEXT}
        headingText={CONTACT_HEADING_TEXT}
        displayButton={true}
        buttonName="Send Feedback"
      />
      <div className="contact-general-info">
        <SideHeading>General Contact Information</SideHeading>
        <div>
          <div className="contact-box">
            <BsTelephoneInboundFill style={iconStyle} />
            <h5 style={{ margin: "10px auto" }}>TELEPHONE</h5>
            <hr style={{ width: "50%", margin: "10px auto" }} />
            <span style={{ fontWeight: "bold" }}>Campus Operator</span>
            <p>650-723-2300</p>
          </div>
          <div className="contact-box">
            <MdMarkEmailRead style={iconStyle} />
            <h5 style={{ margin: "10px auto" }}>EMAIL</h5>
            <hr style={{ width: "50%", margin: "10px auto" }} />
            <p style={{ fontWeight: "bold" }}>for Enquires related to</p>
            <span style={{ marginBottom: "0px" }}>
              General : <i>principal.thrive.ac.in</i>
            </span>
            <span style={{ marginBottom: "0px" }}>
              Admission : <i>admissions.thrive.ac.in</i>
            </span>
            <span style={{ marginBottom: "0px" }}>
              Placements : <i>placements.thrive.ac.in</i>
            </span>
          </div>
          <div className="contact-box">
            <MdMenuBook style={iconStyle} />
            <h5 style={{ margin: "10px auto" }}>THRIVE DICTONARY</h5>
            <hr style={{ width: "50%", margin: "10px auto" }} />
            <span style={{ marginBottom: "40px" }}>
              <a href="/">Search the Thrive Directory </a> for listings from
              both the University and Medical Center.
            </span>
          </div>
        </div>
      </div>
      <hr style={{ width: "50%", margin: "30px auto" }} />
      <SideHeading>Mailing Address</SideHeading>
      <div className="contact-address">
        <div className="contact-box">
          <IoHome style={iconStyle} />
          <h5 style={{ margin: "10px auto" }}>PRIMARY ADDRESS</h5>
          <hr style={{ width: "50%", margin: "10px auto" }} />
          <span style={{ marginBottom: "0px" }}>Thrive University</span>
          <span style={{ marginBottom: "0px" }}>450 Walkway Street</span>
          <span style={{ marginBottom: "0px" }}>Rasagulla, RA 556419</span>
        </div>
        <MapContainer />
      </div>
      <hr style={{ width: "50%", margin: "30px auto" }} />
      <h2 className='heading-font' style={{margin:"50px 20px 20px",textDecoration:"underline"}}>Leave Us a Message</h2>
      <div className="contact-feedback">
      <img src="https://media.istockphoto.com/id/1277188775/photo/we-want-your-feedback-speech-bubble-concept.jpg?s=612x612&w=0&k=20&c=g_As78KiYFrF6YtR4wfj_OGlZHqkOrugH_cML7VKqbk=" alt="" />
      <FeedbackForm />
      </div>
    </div>
  );
}
