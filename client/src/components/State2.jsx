import React, {useState} from 'react'

export default function State2() {
  let [strState, setStrState] = useState("x");

  function changeState() {
    strState += '-';
    console.log(strState);
  }

  // use State에 선언된 함수로 변경할 때에만 바로 rerender됨

  function customSetStrState(){
    setStrState('변완');
  }
  return (
    <div>
      <button onClick={()=> setStrState(strState+ '+')}>리랜더링 반복!</button>
      <button onClick={()=> changeState()}>강제변경 반복!</button>
      <button onClick={customSetStrState}>ddd</button>
      <div>{strState}</div>
    </div>
  )
}
