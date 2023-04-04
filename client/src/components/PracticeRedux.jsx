import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function PracticeRedux() {
  const weight = useSelector((state) => state.weightReducer); // store에 저장된 변수 가져오기
  const dispatch = useDispatch(); // dispatch 사용 선언
  return (
    <>
      <h1>몸무게 {weight}</h1>
      <button
        onClick={() => {
          dispatch({ type: '+' });
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: '-' });
        }}
      >
        감소
      </button>
    </>
  );
}
