import React from 'react'

function ContactBox(props) {
    const {icon,heading,list} = props;
    
  return (
    <div className='contact-box'>
        {icon}
        <h3>{heading}</h3>
        <hr style={{width:"50%"}}/>
        {list.map((item)=>{
        return <p>{item}</p>
    })}
    </div>
  )
}

export default ContactBox



