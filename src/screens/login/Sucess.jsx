import React,{useEffect} from "react";
import './end_result_styles.css';
const Sucess = (props) => {
  return (
    <div className="end_screen">
      <div className="card">
      <div style={{borderRadius:"200px", height:"200px", width:"200px", background: "#F8FAF5", margin:"0 auto"}}>
        <i class="checkmark">✓</i>
    </div>
        <h1>{props.apiResult.message}</h1> 
        <p>We received your Application;<br/> Stay Tuned! we will get back to you</p>
      </div>
   
    </div>
  )
};

export default Sucess;
