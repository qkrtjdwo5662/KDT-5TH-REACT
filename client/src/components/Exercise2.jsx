import React, { useState } from 'react'

export default function State() {
  
  const [num, changeNum] = useState(0);

  return (
    <div>
      <span>{num}</span>
      <br />
      <button onClick={ () => changeNum(num+1) }>+</button>
      <button onClick={ () => changeNum(num-1) }>-</button>
    </div>
  )
}
