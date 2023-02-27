import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";


function Paragraph(props) {
  return (
    <p style={{ textAlign: "center", margin: "20px", fontSize: "20px",fontStyle:"italic"}}>
        <sup>
          <ImQuotesLeft
            style={{
              height: "30px",
              width: "30px",
              position: "relative",
              right: "10px",
            }}
          />
        </sup>
        {props.children}
        <sup>
          <ImQuotesRight
            style={{
              height: "30px",
              width: "30px",
              position: "relative",
              left: "10px",
            }}
          />
        </sup>
      </p>
  )
}

export default Paragraph