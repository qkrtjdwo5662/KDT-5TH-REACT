import React from 'react'
import { useState } from 'react';

export default function ChangeObj(props) {
  const[index, changeIndex] = useState(0);
  const {name, age, nickName}= props.a[index];
  return (
    <div>
      <button onClick={() => 
      (index<2)?changeIndex(index+1):changeIndex(index%2)}>바꾸는 버튼</button>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <h2>nickName: {nickName}</h2>
    </div>
  )
  // const [index, setIndex] = useState(0);
  // let obj = props.objArr[index];
  
  // const changeProfile = () => {
  //   if (index === props.objArr?.length - 1) {
  //     setIndex(0);
  //   } else {
  //     setIndex(index + 1);
  //   }
  // }

  // return (
  //   <div>
  //     <h1>이름 : {obj.name}</h1>
  //     <h2>나이 : {obj.age}</h2>
  //     <h2>별명 : {obj.nickName}</h2>
  //     <button onClick={() => { index === props.objArr.length - 1 ? setIndex((cur) => 0) : setIndex((cur) => cur + 1) }}>프로필 변경하기</button>
  //   </div>
  // )
}
