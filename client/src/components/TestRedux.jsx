import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function TestRedux() {
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>몸무게는 {weight}</h1>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        살 찌기
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        살 빼기
      </button>
    </>
  );
}
