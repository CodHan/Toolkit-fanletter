import React from 'react';
import styled from 'styled-components';
import * as H from '../style/commonsStyle/Header.style';

function Mypage() {
  return (
    <>
      <H.HeaderNav>
        <H.LinkStyle to={'/mainpage'}>HOME</H.LinkStyle>
        <H.MYPAGE>
          <H.LinkStyle to={'/mypage'}>MY PAGE</H.LinkStyle>
          <H.LogOutLink to={'#'}>LOGOUT</H.LogOutLink>
        </H.MYPAGE>
      </H.HeaderNav>
      <Section>
        <Container>
          <UserImage />
          <UserInfoSection>
            <NickNameArea>피자 먹고 싶다</NickNameArea>
            <UpdateBtn>수정하기</UpdateBtn>
          </UserInfoSection>
        </Container>
      </Section>
    </>
  );
}

export default Mypage;

const Section = styled.div`
  display: flex;
  height: 919px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;

const Container = styled.div`
  border-radius: 10px;
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  background-color: darkgrey;
`;
const UserImage = styled.img`
  border: 1px solid black;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;
const UserInfoSection = styled.div`
  display: flex;
  height: 150px;
  flex-direction: column;
  margin-top: 25px;
`;
const NickNameArea = styled.textarea`
  width: 400px;
  height: 50px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  background: black;
  color: white;
`;
const UpdateBtn = styled.button`
  width: 400px;
  height: 50px;
  margin-top: 15px;
  background-color: black;
  color: #ccc;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #464646;
    transition: 0.2s;
  }
`;
