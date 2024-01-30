import React from 'react';
import styled from 'styled-components';
import image from '../../image/header.png';

const HederBackGround = styled.header`
  background-image: url(${image});
  display: flex;
  justify-content: center;
  background-size: cover;
  width: 1097px;
  height: 200px;
  align-items: center;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 50px;
  margin-top: 60px;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #cd0c22;
`;

function Header() {
  return (
    <div>
      <HederBackGround>
        <HeaderTitle>
          <Title>대한 민국 만세 팬레터</Title>
        </HeaderTitle>
      </HederBackGround>
    </div>
  );
}

export default Header;
