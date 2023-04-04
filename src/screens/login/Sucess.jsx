import React,{useEffect} from "react";
import './end_result_styles.css';
const Sucess = (props) => {
  return (
    <div className="end_screen" style={{paddingTop:"100px"}}>
      <div className="card" >
      <div style={{borderRadius:"200px", height:"200px", width:"200px", background: props.apiResult.message.toLowerCase() === "success" ? "#F8FAF5" : "#F7BEC0", margin:"0 auto"}}>
        <i class="checkmark" style={{color:props.apiResult.message.toLowerCase() !== "success" ?"#E7625F":""}}>{props.apiResult.message.toLowerCase() === "success" ? "✓" : "X"}</i>
    </div>
        <h1>{props.apiResult.message}</h1> 
        <p>We received your Application;<br/> Stay Tuned! we will get back to you</p>
      </div>
   
    </div>
  )
};

export default Sucess;
