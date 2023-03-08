import React from 'react'

function SideHeading(props) {
  return (
    <h1
        style={{
          textAlign: "center",
          fontFamily: "'Black Han Sans', sans-serif",
          margin: "20px"
        }}
      >
        {props.children}
      </h1>
  )
}

export default SideHeading