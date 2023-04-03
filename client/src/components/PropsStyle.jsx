import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  background-color: ${(props) => props.color};
`;
export default function PropsStyle({ color }) {
  return (
    <MyDiv color={color} className="xx">
      PropsStyle
    </MyDiv>
  );
}
