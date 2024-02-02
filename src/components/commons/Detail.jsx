import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from '../page/page_style/Detail.style';
import * as A from '../page/page_style/Page.style';
import { useNavigate } from 'react-router-dom';

function Detail({ data, setData }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const filterData = data.filter((item) => item.id === id);
  console.log(filterData);

  return filterData.map((item) => {
    return (
      <S.Container>
        <S.ToHome>뒤로가기</S.ToHome>
        <S.DetailWrapper>
          <div>
            <S.LetterHeader>
              <S.UserWrapper>
                <A.Img src={item.avatar} alt="유저이미지" />
                <S.StyleSpan>{item.nickname}</S.StyleSpan>
              </S.UserWrapper>
              <S.Time>
                <S.StyleSpan>{item.createdAt}</S.StyleSpan>
              </S.Time>
            </S.LetterHeader>
            <S.WriteTo>To:{item.writedTo}</S.WriteTo>
            {/* 수정버튼 true일때 textArea로직 */}
            <S.ContentText>{item.content}</S.ContentText>
          </div>
          <S.Buttons>{/* true=수정완료,false=수정 + 삭제버튼 */}</S.Buttons>
        </S.DetailWrapper>
      </S.Container>
    );
  });
}

export default Detail;
