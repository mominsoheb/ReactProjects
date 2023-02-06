/* Here we Are Using props */

import React from 'react'


const Header = (props) => {
  return (
    <div>
      <div className='name'>

        <h2 style={{
          'background-color': props.headerColor,
          'color': props.color
        }}>{props.headerType}</h2>

        {/* <h3 style={{
          'background-color': props.headerColor,
          'color': props.color
        }}>{props.headerType}</h3> */}

      </div>
    </div>
  )
}

export default Header
