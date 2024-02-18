import styled from 'styled-components';
import image from '../image/header.png';
export const HederBackGround = styled.header`
  background-image: url(${image});
  display: flex;
  justify-content: center;
  background-size: contain;
  width: 100%;
  height: 200px;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  justify-content: center;
  width: 350px;
  height: 50px;
  margin-top: 60px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #cd0c22;
`;
