import React from 'react';
import styled from 'styled-components';
import Card from './Card';

function CardBox() {
  return (
    <BoxStyle>
      <Card />
    </BoxStyle>
  );
}

export default CardBox;

const BoxStyle = styled.div`
  width: 400px;
  height: 300px;
  margin: 5px auto 0 auto;
  text-align: center;
  background-color: aquamarine;
  border-radius: 10px;
`;
