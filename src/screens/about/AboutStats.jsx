import React from 'react'

function AboutStats(props) {
  return (
    <div className={props.class}>
        <span>{props.heading}</span>
        <p>{props.description}</p>
    </div>
  );
}

export default AboutStats