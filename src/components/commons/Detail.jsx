import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from '../page/page_style/Detail.style';

function Detail({ data, setData }) {
  const { id } = useParams();

  return (
    <S.Container>
      <S.ToHome>{/* 홈버튼 */}</S.ToHome>
      <S.DetailWrapper>
        <div>
          <S.LetterHeader>
            <S.UserWrapper>
              {/* 아바타 */}
              <S.NickName>{/* 닉네임 */}</S.NickName>
            </S.UserWrapper>
            <S.Time>{/* 시간 */}</S.Time>
          </S.LetterHeader>
          <S.WriteTo>To:{/* writedTo */}</S.WriteTo>
          {/* 수정버튼 true일때 textArea로직 */}
          <S.ContentText>{/* Content */}</S.ContentText>
        </div>
        <S.Buttons>{/* true=수정완료,false=수정 + 삭제버튼 */}</S.Buttons>
      </S.DetailWrapper>
    </S.Container>
  );
}

export default Detail;
