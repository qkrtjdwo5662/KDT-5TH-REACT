import React, { useRef } from 'react';

export default function ExerciseRef() {
  const divRef = useRef();
  const colorInput = useRef();
  // const divEl = document.querySelector('.divRef');
  return (
    <div ref={divRef} className="divRef">
      <input ref={colorInput} />
      <br />
      <button
        onClick={() => {
          // const divEl = document.querySelector('.divRef');
          divRef.current.style.backgroundColor = colorInput.current.value;
          // divEl.style.backgroundColor = colorInput.current.value;
          // console.log(divRef);
          // console.log(divEl);
        }}
      >
        색 적용
      </button>
    </div>
  );
}
