import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '../style/pagesStyle/Detail.style';
import * as A from '../style/pagesStyle/Letter.style';
import * as B from '../style/commonsStyle/Nav.style';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  __deleteLetter,
  __getLetters,
  __updateLetter,
} from '../../redux/modules/letters';
import Loding from 'components/commons/Loding';

function Detail() {
  const { letters, isLoding } = useSelector((state) => state.letters);
  const { user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const [retouch, setRetouch] = useState(false);
  const [update, setUpdate] = useState();
  const { id } = useParams();

  const navigate = useNavigate();
  //새로고침 대응
  useEffect(() => {
    dispatch(__getLetters());
  }, []);
  if (isLoding) {
    return <Loding />;
  }
  const findData = letters.find((item) => item.id === id);
  //뒤로가기
  const backBtnHendler = () => {
    navigate(-1);
  };
  // 삭제버튼
  const deleteHendler = () => {
    const updateValidation = window.confirm('정말 삭제 할까요?');
    if (updateValidation) {
      navigate('/mainpage');
      dispatch(__deleteLetter(id));
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
      if (update) {
        dispatch(__updateLetter({ update, id }));
        navigate('/mainpage');
      } else {
        window.confirm('수정된 부분이 없어요');
        return setRetouch(false);
      }
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
        {user.id === findData.email && (
          <S.Buttons>
            {retouch === true ? (
              <B.NavStyleButton onClick={updateBtnHendler}>
                수정완료
              </B.NavStyleButton>
            ) : (
              <>
                <B.NavStyleButton onClick={retouchHendler}>
                  수정
                </B.NavStyleButton>
                <B.NavStyleButton onClick={deleteHendler}>
                  삭제
                </B.NavStyleButton>
              </>
            )}
          </S.Buttons>
        )}
      </S.DetailWrapper>
    </S.Container>
  );
}

export default Detail;
