import styled from 'styled-components';
import image from '../image/header.png';
import { Link } from 'react-router-dom';
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

export const HeaderNav = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
`;
export const LinkStyle = styled(Link)`
  color: white;
  font-size: 30px;
`;
export const LogOutLink = styled(Link)`
  color: red;
  font-size: 30px;
  padding: 0 25px 0 25px;
`;
export const HOME = styled.div`
  display: flex;
`;
export const MYPAGE = styled.div`
  display: flex;
`;
