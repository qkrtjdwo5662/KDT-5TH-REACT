import React from 'react';
import { useRef } from 'react';

export default function RefDom() {
  const inputEl = useRef();
  const firstEl = useRef();
  const secondEl = useRef();

  return (
    <>
      <input ref={inputEl} />
      <h1 ref={firstEl}>dd</h1>
      <h1 ref={secondEl}>aa</h1>
      <button
        onClick={() => {
          inputEl.current.value = '바뀜';
          firstEl.current.style.color = 'blue';
          secondEl.current.style.backgroundColor = 'orange';
        }}
      >
        바꾸는 버튼
      </button>
      <button
        onClick={() => {
          inputEl.current.value = '';
          firstEl.current.style.color = '';
          secondEl.current.style.backgroundColor = '';
        }}
      >
        초기화 버튼
      </button>
    </>
  );
}
