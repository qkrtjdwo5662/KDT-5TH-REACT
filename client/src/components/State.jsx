import React, { useState } from 'react'

export default function State() {
  // let teacher = "이효석";
  const [teacher, setTeacher] = useState("이효석");
  const [myName, setmyName] = useState("박성재");
  return (
    <div>
      <button onClick={ () => setTeacher("tetz") }>영어로</button>
      <br />
      <span id="spanId">{teacher}</span>
      <br />
      <button onClick={ () => setmyName("park") }>영어로</button>
      <br />
      <span>{myName}</span>
    </div>
  )
}
