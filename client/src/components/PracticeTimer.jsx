import React, { useEffect, useRef, useState } from 'react';

export default function PracticeTimer() {
  const [render, setRender] = useState(false);

  const count = useRef(0);
  useEffect(() => {
    const timer = setInterval(() => {
      count.current++;
      console.log(count.current);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <>
      <h1>{count.current}</h1>
      <button
        onClick={() => {
          setRender((cur) => !cur);
        }}
      >
        시간
      </button>
    </>
  );
}
