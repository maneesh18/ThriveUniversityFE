import React from 'react'

function HomeContent(props) {
  return (
    <div className={props.class}>
        <img className='home-content-img' src={props.image} alt="home" />
        <div className='home-content-text'>
          <h2>{props.headingText}</h2>
          <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HomeContent;