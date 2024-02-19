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
  box-shadow: inset 0 0 0 0 red;
  color: white;
  font-size: 30px;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    color: #ffffff;
    box-shadow: inset 0 -200px 0 0 red;
  }
`;
export const LogOutLink = styled(Link)`
  box-shadow: inset 0 0 0 0 red;
  color: white;
  font-size: 30px;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    color: #ffffff;
    box-shadow: inset 0 -200px 0 0 red;
  }
  margin-left: 25px;
  margin-right: 25px;
`;
export const HOME = styled.div`
  display: flex;
`;
export const MYPAGE = styled.div`
  display: flex;
`;
