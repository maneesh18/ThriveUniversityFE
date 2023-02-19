import React from 'react'

function GridContent(props) {
  return (
    <div className={props.class}>
        <img className='grid-content-img' src={props.image} alt="home" />
        <div className='grid-content-text'>
          <h2>{props.headingText}</h2>
          <p>{props.text}</p>
        </div>
    </div>
  )
}

export default GridContent;