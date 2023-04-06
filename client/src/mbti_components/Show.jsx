import React, { useEffect } from 'react';
import styled from 'styled-components';
import PinkButton from './PinkButton';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/modules/mbti';
const Header = styled.p`
  font-size: 3em;
`;
const Explanation = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Result = styled.p`
  font-size: 3em;
  color: dodgerblue;
`;
const Additional = styled.p`
  font-size: 2em;
  color: orange;
`;
const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector((state) => state.mbti.explanation[result]);

  const dispatch = useDispatch();

  async function incCount() {
    const resIncCount = await fetch('http://localhost:8001/data/inccount', {
      method: 'POST',
    });
    if (resIncCount.status === 200) {
      console.log(await resIncCount.json());
    } else {
      console.log(await resIncCount.json());
    }
  }
  // useEffect(() => {
  //   incCount();
  // }, []);
  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explanation>{explanation.text}</Explanation>
      <Result>{result}</Result>
      <Additional>이건 재미로 읽어보세요!</Additional>
      <AdditionalImg src={explanation.img} alt="팩폭" />
      <PinkButton
        text="다시 검사하기"
        clickEvent={() => {
          incCount();
          dispatch(reset());
        }}
      ></PinkButton>
    </>
  );
}
