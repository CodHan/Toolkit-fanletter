import React from 'react';
import styled from 'styled-components';

function Loding() {
  return (
    <Load>
      <Box />
    </Load>
  );
}

export default Loding;

const Load = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid black;
  border-color: black transparent transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
