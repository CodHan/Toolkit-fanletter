import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '../page/page_style/Detail.style';
import * as A from '../page/page_style/Page.style';
import * as B from '../page/page_style/Nav.style';
import { useNavigate } from 'react-router-dom';

function Detail({ data, setData }) {
  const [retouch, setRetouch] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const filterData = data.filter((item) => item.id === id);

  const backBtnHendler = () => {
    navigate(-1);
  };
  const deleteHendler = () => {
    const deleateData = data.filter((item) => item.id !== id);
    setData(deleateData);
    navigate(-1);
  };
  console.log(data);
  return filterData.map((item) => {
    return (
      <S.Container>
        <S.ToHome onClick={backBtnHendler}>뒤로가기</S.ToHome>
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
          <S.Buttons>
            {retouch === true ? (
              <B.NavStyleButton>수정완료</B.NavStyleButton>
            ) : (
              <>
                <B.NavStyleButton>수정</B.NavStyleButton>
                <B.NavStyleButton onClick={deleteHendler}>
                  삭제
                </B.NavStyleButton>
              </>
            )}
          </S.Buttons>
        </S.DetailWrapper>
      </S.Container>
    );
  });
}

export default Detail;
