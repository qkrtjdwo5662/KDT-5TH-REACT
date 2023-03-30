import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요');
  const inputValue = useRef();

  const onBtnClick = () => {
    console.log('🖱 버튼 클릭');
    setCount((cur) => cur + 1);
  };

  const onInputChange = () => {
    console.log('키보드 입력');
    setText(inputValue.current.value);
  };

  useEffect(() => {
    console.log('🎨 렌더링 할 때마다 실행되는 useEffect');
  });

  useEffect(() => {
    console.log('버튼 클릭 할 때마다 실행되는 useEffect');
  }, [count]);

  useEffect(() => {
    console.log('텍스트 입력 할 때마다 실행되는 useEffect');
  }, [text]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onBtnClick}>+1 버튼</button>
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange}></input>
    </>
  );
}
