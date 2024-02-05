import styled from 'styled-components';
import image from '../image/header.png';
export const HederBackGround = styled.header`
  background-image: url(${image});
  display: flex;
  justify-content: center;
  background-size: cover;
  width: 1097px;
  height: 200px;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 50px;
  margin-top: 60px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #cd0c22;
`;
