import React, { useRef, useState } from 'react';

export default function Comparing() {
  const [countState, setState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(true);

  const countUpState = () => {
    setState(countState + 1);
    console.log('State:', countState);
  };

  const countUpRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.current);
  };
  const countUpVar = () => {
    countVar = countVar + 1;
    console.log('Var: ', countVar);
  };

  return (
    <>
      <h1>State : {countState}</h1>
      <h1>Ref : {countRef.current}</h1>
      <h1>Var : {countVar}</h1>
      <button
        onClick={() => {
          countUpState();
        }}
      >
        State버튼
      </button>
      <button
        onClick={() => {
          countUpRef();
        }}
      >
        Ref버튼
      </button>
      <button
        onClick={() => {
          countUpVar();
        }}
      >
        Var버튼
      </button>
      <button
        onClick={() => {
          setRender(!render);
        }}
      >
        리랜더 버튼
      </button>
    </>
  );
}
