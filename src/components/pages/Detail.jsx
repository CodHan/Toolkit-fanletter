import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '../style/pagesStyle/Detail.style';
import * as A from '../style/pagesStyle/Letter.style';
import * as B from '../style/commonsStyle/Nav.style';
import { useNavigate } from 'react-router-dom';
import { DataContext } from 'components/context/DataContext';

function Detail() {
  const { data, setData } = useContext(DataContext);
  const [retouch, setRetouch] = useState(false);
  const [update, setUpdate] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const findData = data.find((item) => item.id === id);
  //뒤로가기
  const backBtnHendler = () => {
    navigate(-1);
  };
  // 삭제버튼
  const deleteHendler = () => {
    const updateValidation = window.confirm('정말 삭제 할까요?');
    if (updateValidation) {
      const deleateData = data.filter((item) => item.id !== id);
      navigate('/');
      setData(deleateData);
    } else {
      return;
    }
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
      window.confirm('수정 완료 !!');
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
              <A.Img src={findData.avatar} alt="유저이미지" />
              <S.StyleSpan>{findData.nickname}</S.StyleSpan>
            </S.UserWrapper>
            <S.Time>
              <S.StyleSpan>{findData.createdAt}</S.StyleSpan>
            </S.Time>
          </S.LetterHeader>
          <S.WriteTo>To:{findData.writedTo}</S.WriteTo>
          {retouch === true ? (
            <>
              <S.EditingTextArea
                defaultValue={findData.content}
                onChange={(e) => setUpdate(e.target.value)}
              />
            </>
          ) : (
            <S.ContentText>{findData.content}</S.ContentText>
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
