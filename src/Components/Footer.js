/* Here we Are Using State */

import React, { useState } from 'react'

const Footer = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  console.log('first name', firstName);
  return (
    <div>
      <div className="foot">


        <div>
          <input type="text" placeholder='Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
        </div>

        <div>
          {firstName}
        </div>

        <div>
          <input type="text" placeholder='First Number' value={firstNumber} onChange={e => setFirstNumber(e.target.value)} />

          <input type="text" placeholder='Second Number' value={secondNumber} onChange={e => setSecondNumber(e.target.value)} />
        </div>

        <div>
          {parseInt(firstNumber) + parseInt(secondNumber)}
        </div>

      </div>
    </div>
  )
}

export default Footer
