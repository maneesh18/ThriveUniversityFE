import React from 'react'

function FooterInfo(props) {
    const footerList = props.list;
  return (
    <div className='footer-info-div'>
    <h3 className='footer-info-heading'>{props.heading}</h3>
    {(footerList).map(item =>{
        return <span>{item}</span>
    })}
    </div>
  )
}

export default FooterInfo