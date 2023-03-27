import React, { useState } from 'react'

export default function Condition() {
  const [count, changeCount] = useState(0);
  return (
    <div>
      <h1 onClick={() => {changeCount(count+1)}}> {count>=10 ? "😎" : "👍"}</h1>
      <h1>{count}</h1>
    </div>
  )
}
