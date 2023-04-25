import React, { useRef, useState } from 'react';

export default function UseRef() {
  const [again, setAgain] = useState(true);
  const quiz = useRef();

  const randomFirstNum = Math.floor(Math.random() * 10);
  const randomSecondNum = Math.floor(Math.random() * 10);

  const operatorArr = ['x', '+', '-'];
  const randomArrIndex = Math.floor(Math.random() * operatorArr.length);

  const inputAnswer = useRef();
  const checkAnswer = () => {
    let answer = 0;
    if (operatorArr[randomArrIndex] === 'x') {
      answer = randomFirstNum * randomSecondNum;
    } else if (operatorArr[randomArrIndex] === '+') {
      answer = randomFirstNum + randomSecondNum;
    } else {
      answer = randomFirstNum - randomSecondNum;
    }

    if (parseInt(inputAnswer.current.value) === answer) {
      alert('정답');
      inputAnswer.current.value = '';
      setAgain(false);
    } else {
      alert('땡');
      inputAnswer.current.value = '';
      inputAnswer.current.focus();
      setAgain(true);
    }
  };

  return (
    <div>
      <h1 ref={quiz}>
        {randomFirstNum}
        {operatorArr[randomArrIndex]}
        {randomSecondNum}
      </h1>
      <input ref={inputAnswer} />
      <button
        onClick={() => {
          checkAnswer();
        }}
      >
        정답 제출
      </button>
    </div>
  );
}
