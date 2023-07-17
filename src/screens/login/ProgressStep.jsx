import React from "react";
import { Steps } from "rsuite";
import {
  TbCircle1,
  TbCircle2,
  TbCircle3,
  TbCircle4,
} from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import './progress_step.css';

const ProgressStep = (props) => {
    //getting the complete component
  function handleIconUpdate(index) {
    return (
      <div style={{ display: "flex",padding:"5px" }}>
        {props.step <= index ? (
          getNumberIcon(index)
        ) : (
        <BsCheckCircleFill style={{ color: "white" }} size="2em" /> 
        )}
      </div>
    );
  }

  //getting the particular icon tag
  function getNumberIcon(index) {
    switch (index) {
      case 0:
        return (
          <TbCircle1
            style={{ color:"white" }}
            size="2em"
          />
        );
      case 1:
        return (
          <TbCircle2
            style={{ color:"white" }}
            size="2em"
          />
        );
        // props.step == index ? "white" : "#8E8E93"
      case 2:
        return (
          <TbCircle3
            style={{ color: "white"  }}
            size="2em"
          />
        );
      case 3:
        return (
          <TbCircle4
            style={{ color:"white" }}
            size="2em"
          />
        );
      default:
        return (
          <TbCircle1
            style={{ color: props.step == index ? "white" : "#8E8E93" }}
            size="2em"
          />
        );
    }
  }
  return (
    <div className="step-container">
        <div className="step-header">
          {handleIconUpdate(0)}
          {/* props.step >= 1 ? "white" : "#8E8E93"  */}
          <div style={{ flex: 1, height: "1px", backgroundColor:"White"}} />
          {handleIconUpdate(1)}
          <div style={{ flex: 1, height: "1px", backgroundColor: "white" }} />

          {handleIconUpdate(2)}
          <div style={{ flex: 1, height: "1px", backgroundColor:  "white" }} />

          {handleIconUpdate(3)}

          {/* {handleIconUpdate(4)} */}

        </div>
    </div>
  );
};

export default ProgressStep;
