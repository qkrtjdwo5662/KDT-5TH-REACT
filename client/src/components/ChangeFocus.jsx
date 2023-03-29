import React from 'react';
import { useRef } from 'react';

export default function ChangeFocus() {
  const firstInput = useRef('test');
  const secondInput = useRef();

  return (
    <div>
      <input ref={firstInput} />
      <input ref={secondInput} />
      <h1>{firstInput.current}</h1>
      <br />
      <br />
      <button
        onClick={() => {
          firstInput.current.focus();
        }}
      >
        1번 포커스
      </button>
      <button
        onClick={() => {
          secondInput.current.focus();
        }}
      >
        2번 포커스
      </button>
    </div>
  );
}
