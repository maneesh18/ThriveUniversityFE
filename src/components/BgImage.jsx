import React from 'react'

function BgImage(props) {
  return (
    <div>
        <img className='bgimage-img' src={props.imageSrc} alt="home" />
    </div>
  )
}

export default BgImage