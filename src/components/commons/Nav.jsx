import React from 'react';
import * as S from '../style/commonsStyle/Nav.style';

function Nav({ setSelectName }) {
  const onClick = (name) => {
    setSelectName(name);
  };
  return (
    <div>
      <S.NavParents>
        <S.NavUl>
          <S.Navli>
            <S.NavStyleButton onClick={() => onClick('김강민')}>
              김강민
            </S.NavStyleButton>
          </S.Navli>
          <S.Navli>
            <S.NavStyleButton onClick={() => onClick('김건우')}>
              김건우
            </S.NavStyleButton>
          </S.Navli>
          <S.Navli>
            <S.NavStyleButton onClick={() => onClick('박재훈')}>
              박재훈
            </S.NavStyleButton>
          </S.Navli>
          <S.Navli>
            <S.NavStyleButton onClick={() => onClick('장성엽')}>
              장성엽
            </S.NavStyleButton>
          </S.Navli>
        </S.NavUl>
      </S.NavParents>
    </div>
  );
}

export default Nav;
