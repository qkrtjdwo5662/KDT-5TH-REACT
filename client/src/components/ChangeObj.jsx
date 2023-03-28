import React from 'react'
import { useState } from 'react';

export default function ChangeObj(props) {
  const[index, changeIndex] = useState(0);
  const {name, age, nickName}= props.objArr[index];
  return (
    <div>
      <button onClick={() => 
      (index<2)?changeIndex(index+1): changeIndex(index%2)}>바꾸는 버튼</button>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <h2>nickName: {nickName}</h2>
    </div>
  )
}
