import React from 'react';
import * as S from '../style/commonsStyle/Header.style';

function Header() {
  return (
    <>
      <S.HeaderNav>
        <S.LinkStyle to={'/mainpage'}>HOME</S.LinkStyle>
        <S.MYPAGE>
          <S.LinkStyle to={'/mypage'}>MY PAGE</S.LinkStyle>
          <S.LogOutLink to={'#'}>LOGOUT</S.LogOutLink>
        </S.MYPAGE>
      </S.HeaderNav>
      <S.HederBackGround>
        <S.HeaderTitle>
          <S.Title>대한 민국 만세 팬레터</S.Title>
        </S.HeaderTitle>
      </S.HederBackGround>
    </>
  );
}

export default Header;
