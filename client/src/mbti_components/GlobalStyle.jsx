import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'ARCHISCULPTURE_v200';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2303@1.0/ARCHISCULPTURE_v200.woff2') format('woff2');
  }
  body {
    font-family: 'ARCHISCULPTURE_v200';
    padding-top: 1em;
    white-space: pre-wrap;
  }
  ul, ol {
    list-style: none; 
    padding-left: 0px;
  }
`;
export default GlobalStyle;
