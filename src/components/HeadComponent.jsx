import React from "react";
import BgImage from "./BgImage";
import { Button } from "react-bootstrap";

function HeadComponent(props) {
  const displayButton = props.displayButton;
  return (
    <div className="head-component">
      <BgImage />
      <div className="screen-text-div">
        <h1 className="heading-font">{props.headingText}</h1>
        <div></div>
        <p>{props.paragraphText}</p>
        <Button
          variant="warning"
          style={{
            width: "300px",
            display: displayButton ? "inline-block" : "none",
          }}
          size="lg"
        >
          <span style={{ fontWeight: "bold" }}>{props.buttonName}</span>
        </Button>
      </div>
    </div>
  );
}

export default HeadComponent;
