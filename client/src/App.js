import React from 'react';
import Start from './mbti_components/Start';
import styled from 'styled-components';
import GlobalStyle from './mbti_components/GlobalStyle';
import { useSelector } from 'react-redux';
import Mbti from './mbti_components/Mbti';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  console.log(page);
  return (
    <>
      <GlobalStyle />
      <Main>{page === 0 ? <Start /> : <Mbti />}</Main>
    </>
  );
}
export default App;
