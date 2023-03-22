import React from "react";
import { Steps } from 'rsuite';
import CloseOutlineIcon from '@rsuite/icons/CloseOutline';
const ProgressStep = (props) => {
  return (
    <div style={{color:"red"}}>
    <Steps current={props.step} >
    <Steps.Item />
    <Steps.Item/>
    <Steps.Item />
    <Steps.Item />
    <Steps.Item  />
    {/* // icon={ <CloseOutlineIcon  style={{color:'white',background:'red',height:'150%',width:'100%'}}/>} */}
  </Steps>
    </div>
  )
};

export default ProgressStep;
