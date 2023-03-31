// import axios from "axios";
// import { useEffect } from "react";
import React from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';
import TestStyled from './components/TestStyled';
// practice react

const RootDiv = styled.div`
  text-align: center;
`;
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
  transform: rotate(360deg);
}
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${appLogoSpin} infinite 20s linear;
`;

const AppLink = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.{' '}
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></AppLink>
      </AppHeader>
    </RootDiv>
  );
}
export default App;
