import React from "react";
import { FaFacebookF,FaTwitter,FaYoutube,FaLinkedinIn } from "react-icons/fa";
import FooterInfo from "./FooterInfo";

function Footer() {
  const enquiryList = [
    "Tel : 9922992299",
    "Free call:1800 1999 122",
    "email: thriveuniversity@co.in",
  ];
  const locationsList = ["Location 1:", "12-Walk street", "Terux OH 448765"];
  const openingHoursList = [
    "Mon-Wed___9:00-4:00",
    "Thurs-Sun___9:00-1:00",
  ];
  return (
    <div className="footer">
      <div className="footer-div">
        <div className="footer-icon-div">
          <img
            alt="logo"
            src="../images/logo.jpeg"
            className="inline-block align-top footer-icon-img circular-image"
          />
          <div className="footer-univname-div heading-font">
            <p className="footer-logo-thrive">THRIVE</p>
            <sup className="footer-logo-university">UNIVERSITY</sup>
          </div>
        </div>
        <FooterInfo heading="Further Enquries" list={enquiryList} />
        <FooterInfo heading="Locations" list={locationsList} />
        <FooterInfo heading="Opening Hours" list={openingHoursList} />
      </div>
      <div className="footer-div">
        <div className="footer-div-copyright">
          © Thrive University, Terux, OH 448765
          <br />
          706-542-3000
        </div>
        <div className="footer-div-sm">
        <span className='footer-bottom-thrive'>#Thrive on </span>
        <FaTwitter className="footer-div-icon"/>
        <FaFacebookF className="footer-div-icon"/>
        <FaLinkedinIn className="footer-div-icon"/>
        <FaYoutube className="footer-div-icon"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
