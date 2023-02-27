import React from 'react'


function Department(props) {
  const imgId = props.id+"-academic-department-image"
  const textId = props.id+"-academic-department-text"

  function handleClick(){
    document.getElementById(imgId).classList.toggle("academic-department-img-after")
    document.getElementById(textId).classList.toggle("academic-department-text-after")
  }

  return (
    <div className='academic-department' onClick={handleClick}>
        <img id={imgId} className="academic-department-img-before" src={props.image} alt="department-img" />
        <h3 className='side-heading'>{props.heading}</h3>
        <p id={textId} className="academic-department-text-before" style={{fontStyle:"italic"}}>{props.body}</p>
    </div>
  )
}

export default Department