import React from 'react'

const pract = (props) => {
  return (
    <div>


      <div className="ball" style={{ 'background': props.bgColor, 'color': props.color }}>
        <div className="small-ball" style={{ 'background': props.bgColorSmall, 'color': props.colorSmall }} ></div>
        {props.text}
      </div>
    </div>
  )
}

export default pract
