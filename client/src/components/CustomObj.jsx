import React from 'react'

export default function CustomObj(props) {
  const { name, age, nickName } = props.obj;
  return (
    <div>
      <h1>이름 : {name} </h1>
      <h1>나이 : {age} </h1>
      <h1>닉네임 : {nickName}</h1>
    </div>
  )
}
