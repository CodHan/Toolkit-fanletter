import React from 'react';
import styled from 'styled-components';
import * as S from './commons_style/Header.style';

function Header() {
  return (
    <div>
      <S.HederBackGround>
        <S.HeaderTitle>
          <S.Title>대한 민국 만세 팬레터</S.Title>
        </S.HeaderTitle>
      </S.HederBackGround>
    </div>
  );
}

export default Header;
