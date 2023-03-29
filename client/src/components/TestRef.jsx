import { useRef, useState } from 'react';

import React from 'react';

export default function TestRef() {
  const [text, setText] = useState('아에이오우');

  const inputValue = useRef();

  const onChangeText = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  const onChangeRef = () => {
    console.log(inputValue);
    setText(inputValue.current.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <input className="input" ref={inputValue} onChange={onChangeText} />
      <button onClick={() => onChangeRef()}>반영</button>
    </div>
  );
}
