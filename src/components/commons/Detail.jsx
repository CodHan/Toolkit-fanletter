import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '../page/page_style/Detail.style';
import * as A from '../page/page_style/Page.style';
import * as B from '../page/page_style/Nav.style';
import { useNavigate } from 'react-router-dom';

function Detail({ data, setData }) {
  const [retouch, setRetouch] = useState(false);
  const [update, setUpdate] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const item = data.find((item) => item.id === id);
  //뒤로가기
  const backBtnHendler = () => {
    navigate(-1);
  };
  // 삭제버튼
  const deleteHendler = () => {
    const deleateData = data.filter((item) => item.id !== id);
    setData(deleateData);
    navigate(-1);
  };
  //수정버튼
  const retouchHendler = () => {
    setRetouch(true);
  };
  //수정완료버튼
  const updateBtnHendler = () => {
    const updateValidation = window.confirm('이대로 수정 하시겠습니까?');
    if (updateValidation) {
      const updateContent = data.map((item) => {
        if (item.id === id) {
          return { ...item, content: update };
        }
        return item;
      });
      setData(updateContent);
    }
    setRetouch(false);
    if (!updateValidation) {
      return window.confirm('수정이 취소 되었습니다.'), setRetouch(false);
    }
  };
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
          {retouch === true ? (
            <>
              <S.EditingTextArea
                defaultValue={item.content}
                onChange={(e) => setUpdate(e.target.value)}
              />
            </>
          ) : (
            <S.ContentText>{item.content}</S.ContentText>
          )}
        </div>
        <S.Buttons>
          {retouch === true ? (
            <B.NavStyleButton onClick={updateBtnHendler}>
              수정완료
            </B.NavStyleButton>
          ) : (
            <>
              <B.NavStyleButton onClick={retouchHendler}>수정</B.NavStyleButton>
              <B.NavStyleButton onClick={deleteHendler}>삭제</B.NavStyleButton>
            </>
          )}
        </S.Buttons>
      </S.DetailWrapper>
    </S.Container>
  );
}

export default Detail;
