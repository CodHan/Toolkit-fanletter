import React from 'react';
import * as S from '../style/commonsStyle/Header.style';
import { useNavigate } from 'react-router-dom';

function Header() {
  const handLogOut = () => {
    const confirm = window.confirm('로그아웃 하시겠습니까?');
    if (confirm) {
      localStorage.removeItem('token');
      window.location.reload();
    } else {
      return;
    }
  };
  return (
    <>
      <S.HeaderNav>
        <S.LinkStyle to={'/mainpage'}>HOME</S.LinkStyle>
        <S.MYPAGE>
          <S.LinkStyle to={'/mypage'}>MY PAGE</S.LinkStyle>
          <S.LogOutLink onClick={handLogOut}>LOGOUT</S.LogOutLink>
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
