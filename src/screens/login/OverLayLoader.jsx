import React from "react";
import './overlay_styles.css';

import { Loader } from "react-full-page-loader-overlay";
const OverLayLoader = (props) => {
  return (
    <div>
      
      {props.active==true ? 
      <div id="overlay" ></div>:null
      }
      <div ><Loader show={props.active} filling={false} /></div>
    </div>
  )
};

export default OverLayLoader;
